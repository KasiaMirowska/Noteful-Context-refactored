import React from 'react';
import NotefulContext from '../NotefulContext';
import './OpenNote.css'



export default class OpenNote extends React.Component {
    static contextType = NotefulContext;

    
    // deleteNoteRequest = (noteId, callback) => {
    //     const notesURL = 'http://localhost:9090/notes';
    //     fetch(notesURL + `/${noteId}/`, {
    //         method: 'DELETE'
    //     })
    //     .then(res => {
    //         if(!res.ok) {
    //             return res.json().then(error => {
    //                 throw error
    //             })
    //         }
    //         return res.json()
    //     })
    //     .then(data => {
    //         callback(noteId)
    //         this.props.history.push('/')
    //     })
    //     .catch(err => {
    //         console.error(err);
    //     })
    // }

    render() {
        // const contextValue = {
        //     deleteNoteRequest: this.deleteNoteRequest,
        // }
    
        const note = this.context.notes.find(note => note.id === this.props.match.params.openNoteId);
        if(note){
            return (
                <div>
                    <h2>Notes</h2>
                        {/* <NotefulContext.Provider value={contextValue}> */}
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
                        {/* </NotefulContext.Provider>    */}
                </div>
                               
                
            );
        } else {
            return null;
        }
    
    }
    
}