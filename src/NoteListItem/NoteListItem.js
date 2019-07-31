import React from 'react';
import NotefulContext from '../NotefulContext'
import './NoteListItem.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


export default function NoteListItem(props) {
    // console.log(props.modified)
    // const dateStr = props.modified.getFullYear()+'-' + (props.modified.getMonth()+1) + '-'+props.modified.getDate();
   
  
    return (
        <NotefulContext.Consumer>
            {(context) => {
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

NoteListItem.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      folderId: PropTypes.string.isRequired,
      modified: PropTypes.instanceOf(Date),
    }))
  }