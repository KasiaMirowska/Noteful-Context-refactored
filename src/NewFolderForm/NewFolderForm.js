import React from 'react';
import NotefulContext from '../NotefulContext';
import cuid from 'cuid';


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
        console.log(newFolder)
        const url = `http://localhost:9090/folders/`
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(newFolder),
            headers: {
                'content-type': 'application/json',
              }
        })
        .then(res => {
            if(!res.ok){
                return res.json().then(error => {
                    throw new Error('try again, we have a connection problem')
                })
            }
            return res.json()
        })
        .then(data => {
            name.value = ''
            this.context.addNewFolder(data)
            this.props.history.push('/')
        })
        .catch(error => {
            this.setState({error})
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