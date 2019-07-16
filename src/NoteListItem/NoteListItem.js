import React from 'react';
import './NoteListItem.css';
import { Link } from 'react-router-dom';

export default function NoteListItem(props) {
   
    return (
        <div className='note'>
             <ul >
                <li id={props.id} >
                    <Link to= {`/openNote/${props.id}`} className="link"> 
                        <h3>{props.name}</h3>
                    </Link>
                    {props.modified}
                    <br />
                    <button className='delete-button' type='button'>Delete Note</button>
                </li>
            </ul>
            
        </div>
    )
}