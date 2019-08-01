import React from 'react';
import { Redirect } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import './OpenNote.css';
import PropTypes from 'prop-types';


export default class OpenNote extends React.Component {
    static contextType = NotefulContext;

    render() {
        const note = this.context.notes.find(note => note.id === this.props.match.params.openNoteId);
        if(note){
            return (
                <div>
                    <h2>Notes</h2>
                    <div className='open-view'>
                        <h3>{note.name}</h3>
                        {note.modified}       
                        <button 
                            className='delete-button'
                            onClick={() => this.context.deleteNoteRequest(note.id, this.context.deleteNote)}
                        >
                            Delete Note
                        </button>
                        <p className='content'>{note.content}</p>
                    </div> 
                </div>      
            );
        } else {
            return <Redirect to='/'/>;
        }  
    }
}

OpenNote.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      folderId: PropTypes.string.isRequired,
      modified: PropTypes.instanceOf(Date),
    })),
    deleteNote: PropTypes.func,
}