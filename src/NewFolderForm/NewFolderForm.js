import React from 'react';
import NotefulContext from '../NotefulContext';
import cuid from 'cuid';
import APIcalls from '../API_service';
import PropTypes from 'prop-types';

export default class NewFolderForm extends React.Component {
    static contextType = NotefulContext;
    state = {
        error: null
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let { name } = e.target
        const newFolder = {
            name: name.value,
            id: cuid(),
        }
        
        APIcalls.newFolder(newFolder)
            .then(data => {
                name.value = ''
                this.context.addNewFolder(data)
                this.props.history.push('/')
            })
            .catch(err => {
                this.setState({
                    error: err.message,
                })
            })


    }

    render() {
        return (
            <div className='note-list'>
                {this.state.error && <h2 aria-label='error-message'>{this.state.error.message}</h2>}
                <div className='noteList-header-container'>
                    <h2 className='noteList-header'>Create a folder</h2>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className='input-fields'>
                        <label htmlFor='folder-name'>Name</label>
                        <input
                            type='text'
                            name='name'
                            id='name'
                            aria-label='folder-name'
                            aria-required='true'
                            required
                           />
                    </div>
                    <div className='button-field'>
                        <button type='submit'>Add Folder
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

NewFolderForm.propTypes = {
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