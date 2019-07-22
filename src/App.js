import React from 'react';
import './App.css';
import NotefulContext from './NotefulContext';
import { Route, Link } from 'react-router-dom';
import Header from './Header/Header';
import SidePanel from './SidePanel/SidePanel';
import NoteList from './NoteList/NoteList';
import OpenNote from './OpenNote/OpenNote';
import ONSidePanel from './OpenNoteSidePanel/ONSidePanel';


export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      folders: [],
      notes: [], 
    }
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
    const foldersURL = 'http://localhost:9090/folders';
    const notesURL = 'http://localhost:9090/notes';
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

  render(){
    console.log(this.state.folders)
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      deleteNote: this.deleteNote,
      deleteNoteRequest: this.deleteNoteRequest,
    }
    return (
      <div className="App">
        <NotefulContext.Provider value={contextValue}>
          <Link to={'/'} className='link'>
            <Header />
          </Link>
          <div className='main'>

            <Route exact path='/' component={SidePanel} />
            <Route exact path='/' component={NoteList} />
            
            <Route path='/folder' component={SidePanel} />
            <Route exact path='/folder/:folderId' component={NoteList} />
        
            <Route path='/openNote/:openNoteId' component={ONSidePanel} />
            <Route path='/openNote/:openNoteId' component={OpenNote} /> 
            
          </div>
          
        </NotefulContext.Provider>
      </div>
    );
  }
  
}


