import React from 'react';
import NotefulContext from '../NotefulContext';
import './OpenNote.css'



export default class OpenNote extends React.Component {
    static contextType = NotefulContext;
    render() {
        const note = this.context.notes.find(note => note.id === this.props.match.params.openNoteId);
    
    return (
        <div>
            <h2>Notes</h2>
            <div className='open-view'>
                <h3>{note.name}</h3>
                {note.modified}       
                <button className='delete-button'>Delete Note</button>
            </div> 
            <p className='content'>{note.content}</p>    
        </div>
                       
        
    );
    }
    
}