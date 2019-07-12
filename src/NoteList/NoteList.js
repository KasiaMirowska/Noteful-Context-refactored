import React from 'react';
import './NoteList.css';
import Note from '../Note/Note';

export default function NoteList(props) {
    console.log(props)
    const filterNotesByFolder = () => {
        const notes = props.notes
        if(!props.match.params.folderId){
           return notes; 
        }
        return notes.filter((note) => {
          if(note.folderId === props.match.params.folderId) {
            return note;
          }
        })
      }
    
    
 
    
    const notes = filterNotesByFolder().map(note => {
        return <Note 
                key={note.id}
                id={note.id}
                name={note.name}
                modified={note.modified}
                folderId={note.folderId}
                content={note.content}
                />
    })
    
  
    return (
        <div className='note-list'>
            <h2>Notes</h2>
            {notes}
        </div>
    )
}