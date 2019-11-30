import React from 'react';
import './App.css';
import NotefulContext from './NotefulContext';
import { Route, Link } from 'react-router-dom';
import Header from './Header/Header';
import SidePanel from './SidePanel/SidePanel';
import NoteList from './NoteList/NoteList';
import OpenNote from './OpenNote/OpenNote';
import SidePanel2 from './SidePanel2/SidePanel2';
import SidePanel3 from './SidePanel3/SidePanel3';
import NewFolderForm from './NewFolderForm/NewFolderForm';
import NewNoteForm from './NewNote/NewNoteForm';
import APIcalls from './API_service';
import Errors from './Errors/Errors';
import PropTypes from 'prop-types';


export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      folders: [],
      notes: [],
    }
  }
  
  deleteFolder = (folderId) => {
    
    const newFolders = this.state.folders.filter(folder => folder.id !== folderId)
    console.log(folderId, newFolders, 'MMMMMMMMMMMMMMMM')
    this.setState({
      folders: newFolders,
    })
  }
  
  deleteNote = (noteId) => {
    const newNotes = this.state.notes.filter(note => note.id !== noteId)
    console.log(newNotes, 'hhhhhhhhhhhhhhh')
    this.setState({
      notes: newNotes,
    })
  }

  deleteNoteRequest = (noteId) => {
    APIcalls.deleteNoteRequest(noteId)
    .then(res => {
      console.log('HERE??????????')
      this.deleteNote(noteId) 
  })
    .catch(err => {
      this.setState({
        error: err.message,
      })
    })
  }  
  
  componentDidMount() {
    APIcalls.getFoldersData()
    .then(serverData => {
      console.log(serverData)
      this.setState({
        folders: serverData
      })
    })
    .catch(err => {
      this.setState({
        error: err.message,
      })
    })
    
    APIcalls.getNotesData()
    .then(serverData => {
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
      <main className="App">
        <NotefulContext.Provider value={contextValue}>
          <Errors>
            <Link to={'/'} className='link' aria-label="Noteful">
              <Header />
            </Link>
            {this.state.error && <h2 aria-label='error-message'>{this.state.error.message}</h2>}
            <div className='main'>
           
              <Route exact path='/' component={SidePanel} />
              <Route exact path='/' component={NoteList} />
              
              <Route path='/folder' component={SidePanel} />
              <Route exact path='/folder/:folderId' component={NoteList} />
          
              <Route exact path='/notes/:openNoteId' component={SidePanel2} />
              <Route exact path='/notes/:openNoteId' component={OpenNote} />

              <Route exact path='/newFolder' component={SidePanel3} />
              <Route exact path='/newFolder' component={NewFolderForm} /> 

              <Route exact path='/newNote' component={SidePanel3} />
              <Route exact path='/newNote' component={NewNoteForm} />
            </div>
          </Errors> 
        </NotefulContext.Provider>
      </main>
    );
  };
};

App.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
      length: PropTypes.number,
      action: PropTypes.string,
      location: PropTypes.object,
      createHref: PropTypes.func,
      push: PropTypes.func,
  })),
  location: PropTypes.arrayOf(PropTypes.shape({
      pathname: PropTypes.string,
      search: PropTypes.string,
      hash: PropTypes.string,
      key: PropTypes.string,
  })),
  match: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string,
      url: PropTypes.string,
      isExact: PropTypes.boolean,
      params : PropTypes.arrayOf(PropTypes.shape({
          path: PropTypes.string,
          url: PropTypes.string,
      }))
  })),
}
