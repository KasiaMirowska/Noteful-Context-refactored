import React from 'react';
import { Redirect } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import './OpenNote.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default class OpenNote extends React.Component {
    static contextType = NotefulContext;

    render() {
        const note = this.context.notes.find(note => note.id === Number(this.props.match.params.openNoteId));

        if (note) {
            let modifiedDate = new Date(note.date_created)
            modifiedDate = modifiedDate.getFullYear() + '-' + modifiedDate.getMonth() + '-' + modifiedDate.getDate();
            return (
                <div className='note-list'>
                    <div className='noteList-header-container'>
                        <h2 className='noteList-header'>Note</h2>
                        <Link to='/newNote'>
                            <button className='add-note'>Add Note</button>
                        </Link>
                    </div>
                    <div className='note openNote'>
                        <div className='note-info-container'>
                            <a>
                                <h3 className='open-note2'> {note.name}</h3>
                            </a>
                            <div className='date'>{modifiedDate}</div>
                        </div>
                        <button
                            className='delete-button2'
                            onClick={() => this.context.deleteNoteRequest(note.id, this.context.deleteNote)}
                        >
                            <FontAwesomeIcon icon={faTrashAlt} />
                            {' '}
                        </button>
                    </div>

                    <div className='content-container'>
                        <p className='open-note'>{note.content}</p>
                    </div>
                </div >


            );
        } else {
            return <Redirect to='/' />;
        }
    }
}

OpenNote.propTypes = {
    history: PropTypes.shape({
        length: PropTypes.number,
        action: PropTypes.string,
        location: PropTypes.object,
        createHref: PropTypes.func,
        push: PropTypes.func,
    }),
    location: PropTypes.shape({
        pathname: PropTypes.string,
        search: PropTypes.string,
        hash: PropTypes.string,
        key: PropTypes.string,
    }),
    match: PropTypes.shape({
        path: PropTypes.string,
        url: PropTypes.string,
        isExact: PropTypes.bool,
        params: PropTypes.shape({
            path: PropTypes.string,
            url: PropTypes.string,
        })
    }),
}