import React from 'react';
import NotefulContext from '../NotefulContext';
import cuid from 'cuid';
import APIcalls from '../API_service';


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
                        placeholder='enter name'>
                    </input>
                    <button type='submit'>Add Folder</button>
                </form>
            </div>
        )
    }
}