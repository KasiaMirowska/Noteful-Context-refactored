import React from 'react';
import NotefulContext from '../NotefulContext';
import './NoteList.css';
import NoteListItem from '../NoteListItem/NoteListItem';

export default class NoteList extends React.Component {
    static contextType = NotefulContext;
   
    filterNotesByFolder = () => {
        const notes = this.context.notes
        if(!this.props.match.params.folderId){
           return notes; 
        }
        return notes.filter((note) => {
          if(note.folderId === this.props.match.params.folderId) {
            return note;
          }
        })
      }
    
    render(){
      console.log(this.context)
      const notes = this.filterNotesByFolder().map(note => {
        return <NoteListItem 
                key={note.id}
                id={note.id}
                name={note.name}
                modified={note.modified}
                folderId={note.folderId}
                content={note.content}
                // deleteNoteRequest={this.context.deleteNoteRequest}
                />
    })

      return (
        <div className='note-list'>
            <h2>Notes</h2>
            {notes}
            <button className='add-note'>Add Note</button>
        </div>
    )
    }
    
}