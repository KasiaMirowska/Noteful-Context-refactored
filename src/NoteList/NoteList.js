import React from 'react';
import NotefulContext from '../NotefulContext';
import './NoteList.css';
import NoteListItem from '../NoteListItem/NoteListItem';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
      const notes = this.filterNotesByFolder().map(note => {
        return <NoteListItem 
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
            <Link to='/newNote'>
            <button className='add-note'>Add Note</button>
            </Link>
        </div>
    )
    }
    
}
NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    folderId: PropTypes.string.isRequired,
  }))
}