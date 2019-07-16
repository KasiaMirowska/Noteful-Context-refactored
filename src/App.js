import React from 'react';
import './App.css';
import Data from './dummyData'
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
      
      highLightedFolder: null,
    }
  }

 

  
  render(){

    return (
      <div className="App">
        <Link to={'/'} className='link'>
          <Header />
        </Link>
        <div className='main'>

          
          
          <Route exact path='/' render={() => <SidePanel folders={this.state.folders} highLight={this.state.highLightedFolder} />} />
          <Route exact path='/' render={(props) => <NoteList {...props} notes={this.state.notes} />} />
          
          
        
          <Route path='/folder' render={() => <SidePanel folders={this.state.folders} highLight={this.state.highLightedFolder} />} />
          <Route exact path='/folder/:folderId' render={(props) => <NoteList {...props} notes={this.state.notes}/>} />
          

         
          <Route path='/openNote/:openNoteId' render={(props) => <ONSidePanel {...props} folders={this.state.folders} notes={this.state.notes} />} />
          <Route path='/openNote/:openNoteId' render={(props) => <OpenNote {...props} notes={this.state.notes} />} /> 
          
        </div>
        
       
      </div>
    );
  }
  
}


