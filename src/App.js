import React from 'react';
import './App.css';
import Data from './dummyData'
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
      folders: Data.folders,
      notes: Data.notes, 
    }
  }

  render(){
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
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


