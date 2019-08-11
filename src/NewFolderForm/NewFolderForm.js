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
        
        
    }

    render(){
        return(
            <div>
                {this.state.error && <h2>{this.state.error.message}</h2>}
                <h2>Create a folder</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='folder-name'>Name</label>
                    <input 
                        type='text'
                        name='name'
                        id='name'
                        aria-label='folder-name'
                        aria-required='true'
                        placeholder='enter name'>
                    </input>
                    <button type='submit'>Add Folder</button>
                </form>
            </div>
        )
    }
}

NewFolderForm.propTypes = {
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