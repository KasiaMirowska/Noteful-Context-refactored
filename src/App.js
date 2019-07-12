import React from 'react';
import './App.css';
import Data from './dummyData'
import { Route } from 'react-router-dom';
import Header from './Header/Header';
import SidePanel from './SidePanel/SidePanel';
import NoteList from './NoteList/NoteList';
import Note from './Note/Note';

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
       <Header />
        <div className='main'>
          
          //home-page view:
          <Route path='/' render={() => <SidePanel folders={this.state.folders} highLight={this.state.highLightedFolder} />} />
          <Route exact path='/' render={(props) => <NoteList {...props} notes={this.state.notes} />} />
          
          
          //folder selection note view:
          <Route exact path='/folder' render={(props) => <NoteList {...props} notes={this.state.notes} />} />
          <Route exact path='/folder/:folderId' render={(props) => <NoteList {...props} notes={this.state.notes}/>} />


          //open note view:
          <Route exact path='/note' render={(props) => <NoteList {...props} notes={this.state.notes} />} />
          <Route exact path='/note/:noteId' render={(props) => <Note {...props} notes={this.state.notes} />} /> 
          
        </div>
        
       
      </div>
    );
  }
  
}


