import React from 'react';
import './Note.css';
import { Link } from 'react-router-dom';

export default function Note(props) {
    // console.log(props)
    // let openNote = () => {
    //     const notes = props.notes
    //     if(!props.match.params.noteId){
    //         return ''; 
    //      }
    //     return notes.find(note => note.id === props.match.params.noteId) 
    // }
    // console.log(openNote())
    
    // let openNoteView = () => {
    //     if(props.match.params.noteId){
    //         return (
    //             <li id={props.id} >
    //                 <h3>{props.name}</h3>
    //                 <p>{props.modified}</p>
    //                 <p>{props.content}</p>
    //                 </li>)
    //     }
    // }
                    
                    
    
    return (
        <div className='note'>
             <ul >
                <li id={props.id} >
                    <Link to= {`/note/${props.id}`}> 
                    <h3>{props.name}</h3>
                    </Link>
                    <p>{props.modified}</p>
                    
                </li>
            </ul>
            
        </div>
    )
}