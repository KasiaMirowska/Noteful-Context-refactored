import React from 'react';
import NotefulContext from '../NotefulContext';
import cuid from 'cuid';
import APIcalls from '../API_service';
import PropTypes from 'prop-types';


export default class NewNoteForm extends React.Component {
    static contextType = NotefulContext
    state = {
        folderSelection: null,
        error: null,
    }
    
    setSelection =(id)=>{
        console.log(id)
        this.setState({
            folderSelection: id
        })
    }
    
    handleSubmit = e => {
        e.preventDefault()
        const { name, content } = e.target
        const newNote = {
            name: name.value,
            id: cuid(),
            content: content.value,
            folderId: this.state.folderSelection,
            modified: new Date().toDateString(),
        }
        
        APIcalls.newNote(newNote)
        .then(data => {
            name.value = ''
            content.value = ''
            this.setState({
                folderSelection: null
            })
            this.context.addNewNote(data)
            this.props.history.push('/')
        })
        
    }

    render(){
        const folderSelection = this.context.folders.map(folder => {
            return (
                <option value={folder.id} key={folder.id}>
                    {folder.name}
                </option>
            )
        })
        return(
            <div>
                {this.state.error && <h2>{this.state.error.message}</h2>}
                <h2>Create a note</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='note-name'>Name</label>
                    <input
                        type='text' 
                        name='name'
                        id='name'
                        aria-label='note-name'
                        aria-required='true'
                        required
                        />
                    <label htmlFor='note-content'>Content</label>
                    <input
                        type='text' 
                        name='content'
                        id='content'
                        aria-label='note-content'
                        aria-required='true'
                        required
                        />
                    <label htmlFor='folder'>Folder</label>
                    <select 
                        required
                        id='folder-selection' 
                        name='folder-selection'
                        aria-label='folder-selection'
                        aria-required='true'
                        onChange={(e)=> this.setSelection(e.target.value)}
                        >
                        <option value=''>Select one...</option>
                        {folderSelection}
                    </select>
                    <button type='submit'>Add Note</button>
                </form>
            </div>
        )
    }
}

NewNoteForm.propTypes = {
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