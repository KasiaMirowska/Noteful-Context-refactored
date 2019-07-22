import React from 'react';
import NotefulContext from '../NotefulContext'
import './NoteListItem.css';
import { Link } from 'react-router-dom';

// function deleteNoteRequest(noteId, callback) {
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
//         return callback(noteId);
//     })
//     .catch(err => {
//         console.error(err);
//     })
// }

export default function NoteListItem(props) {
   
    return (
        <NotefulContext.Consumer>
            {(context) => {
                console.log(context)
                return (
            <div className='note'>
                <ul >
                    <li id={props.id} >
                        <Link to= {`/openNote/${props.id}`} className="link"> 
                            <h3>{props.name}</h3>
                        </Link>
                        {props.modified}
                        <br />
                        <button 
                            className='delete-button' 
                            type='button'
                            onClick={() => context.deleteNoteRequest(props.id, context.deleteNote)}
                        >
                        Delete Note
                        </button>
                    </li>
                </ul>
                
            </div>
        )}
        }
        </NotefulContext.Consumer>
    )
}