import React from 'react';
import NotefulContext from '../NotefulContext'
import './NoteListItem.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default function NoteListItem(props) {

    let modifiedDate = new Date(props.modified)
    modifiedDate = modifiedDate.getFullYear() + '-' + modifiedDate.getMonth() + '-' + modifiedDate.getDate();

    return (
        <NotefulContext.Consumer>
            {(context) => {
                return (
                    <div className='note'>
                        <ul className='noteList'>
                            <li className='li2' id={props.id} >
                                <div className='note-info-container'>
                                    <Link to={`/notes/${props.id}`} className="link2">
                                        <h3>{props.name}</h3>
                                    </Link>
                                    <div className='date'>{modifiedDate}</div>
                                </div>
                                <button
                                    className='delete-button2'
                                    type='button'
                                    onClick={() => context.deleteNoteRequest(props.id, context.deleteNote)}
                                >
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                    {' '}
                                </button>
                            </li>
                        </ul>

                    </div>
                )
            }
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