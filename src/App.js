import React from 'react';
import './App.css';
import NotefulContext from './NotefulContext';
import { Route, Link } from 'react-router-dom';
import Header from './Header/Header';
import SidePanel from './SidePanel/SidePanel';
import NoteList from './NoteList/NoteList';
import OpenNote from './OpenNote/OpenNote';
import SidePanel2 from './OpenNoteSidePanel/SidePanel2';
import SidePanel3 from './SidePanel3/SidePanel3';
import NewFolderForm from './NewFolderForm/NewFolderForm';
import NewNoteForm from './NewNote/NewNoteForm';


export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      folders: [],
      notes: [],
      error: null, 
    }
  }
  
  deleteFolder = (folderId) => {
    const newFolders = this.state.folders.filter(folder => folder.id !== folderId)
    this.setState({
      folders: newFolders,
    })
  }
  
  deleteNote = (noteId) => {
    const newNotes = this.state.notes.filter(note => note.id !== noteId)
    this.setState({
      notes: newNotes,
    })
  }

  deleteNoteRequest = (noteId, callback) => {
    const notesURL = 'http://localhost:9090/notes';
    fetch(notesURL + `/${noteId}/`, {
        method: 'DELETE'
    })
    .then(res => {
        if(!res.ok) {
            return res.json().then(error => {
                throw error
            })
        }
        return res.json()
    })
    .then(data => {
        callback(noteId)
        
    })
    .catch(err => {
        console.error(err);
    })
}
  
  componentDidMount() {
    const foldersURL = 'http://localhost:9090/folders/';
    const notesURL = 'http://localhost:9090/notes/';
    fetch(foldersURL)
    .then(res => {
      if(!res.ok){
        throw new Error('something went wrong')
      }
      return res;
    })
    .then(res => res.json())
    .then(serverData => {
      this.setState({
        folders: serverData
      })
    })
    .catch(err => {
      this.setState({
          error: err.message,
      })
    })

    fetch(notesURL)
    .then(res => {
      if(!res.ok){
        throw new Error('something went wrong')
      }
      return res;
    })
    .then(res => res.json())
    .then(serverData => {
      console.log(serverData)
      this.setState({
        notes: serverData
      })
    })
    .catch(err => {
      this.setState({
          error: err.message,
      })
    })
  }

  addNewFolder = (newFolder)=> {
    console.log(newFolder)
    this.setState({
      folders: [...this.state.folders, newFolder ]
    })
  }

  addNewNote = (newNote) => {
    this.setState({
      notes: [...this.state.notes, newNote]
    })
  }

  
  render(){
    
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      deleteNote: this.deleteNote,
      deleteNoteRequest: this.deleteNoteRequest,
      addNewFolder: this.addNewFolder,
      deleteFolder: this.deleteFolder,
      addNewNote: this.addNewNote,
    }
    return (
      <div className="App">
        <h3>{this.state.error}</h3>
        <NotefulContext.Provider value={contextValue}>
          <Link to={'/'} className='link'>
            <Header />
          </Link>
          <div className='main'>

            <Route exact path='/' component={SidePanel} />
            <Route exact path='/' component={NoteList} />
            
            <Route path='/folder' component={SidePanel} />
            <Route exact path='/folder/:folderId' component={NoteList} />
        
            <Route path='/openNote/:openNoteId' component={SidePanel2} />
            <Route path='/openNote/:openNoteId' component={OpenNote} />

            <Route path='/newFolder' component={SidePanel3} />
            <Route path='/newFolder' component={NewFolderForm} /> 

            <Route path='/newNote' component={SidePanel3} />
            <Route path='/newNote' component={NewNoteForm} />
            
          </div>
          
        </NotefulContext.Provider>
      </div>
    );
  }
  
}


