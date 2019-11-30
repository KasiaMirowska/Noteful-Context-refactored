import React from 'react'
import './Folder.css';
import { Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import PropTypes from 'prop-types';
import APIcalls from '../API_service';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default class Folder extends React.Component {
    static contextType = NotefulContext;
    state = {
        error: null,
    }

    deleteFolderRequest = (folderId, callback) => {
        APIcalls.deleteFolderRequest(folderId)
            .then(data => {
                console.log(folderId, callback, 'KKKKKKKKKKKKK')
                callback(folderId)
            })
            .catch(err => {
                this.setState({
                    error: err.message,
                })
            })
    }

    filteredNotesAmount = () => {
        let filteredNotes = this.context.notes.filter((note) => note.folder === this.props.id)
        return filteredNotes.length
    }

    linkIsActive = () => {
        const href = window.location.href;
        const id = this.props.id;
        return (
            id === (href[href.length - 1] - 0) ? ' active' : '' 
        )
    }
    render() {
        return (
            <div className='folder'>
                {this.state.error && <h2 aria-label='error-message'>{this.state.error.message}</h2>}
                <ul className='folder-list'>
                    <li
                        className='li'
                        key={this.props.id} >
                            <div className='folder-info-container'>
                        <div className='amount'>
                            {this.filteredNotesAmount()}
                        </div>
                        <Link to={`/folder/${this.props.id}`} className={`link${this.linkIsActive()}`}>
                        
                            <h3 className='folder-name'>    {this.props.name}</h3>
                        </Link>
                        </div>
                        <button
                            className='delete-button'
                            type='button'
                            onClick={() => this.deleteFolderRequest(this.props.id, this.context.deleteFolder)}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                            {' '}
                        </button>

                    </li>
                </ul>
            </div>

        )
    }



}
Folder.propTypes = {
    folders: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    })),
}
