import React from 'react';
import { Redirect } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import './OpenNote.css';
import PropTypes from 'prop-types';


export default class OpenNote extends React.Component {
    static contextType = NotefulContext;

    render() {
        console.log(this.props)
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
    history: PropTypes.arrayOf(PropTypes.shape({
        length: PropTypes.number,
        action: PropTypes.string,
        location: PropTypes.object,
        createHref: PropTypes.func,
        push: PropTypes.func,
    })),
    location: PropTypes.arrayOf(PropTypes.shape({
        pathname: PropTypes.string,
        search: PropTypes.string,
        hash: PropTypes.string,
        key: PropTypes.string,
    })),
    match: PropTypes.arrayOf(PropTypes.shape({
        path: PropTypes.string,
        url: PropTypes.string,
        isExact: PropTypes.boolean,
        params : PropTypes.arrayOf(PropTypes.shape({
            path: PropTypes.string,
            url: PropTypes.string,
        }))
    })),
}