import React from 'react';
import NotefulContext from '../NotefulContext';
import cuid from 'cuid';

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
        console.log(newNote)
        const url = `http://localhost:9090/notes/`
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(newNote),
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
            content.value = ''
            this.setstate({
                folderSelection: null
            })
            this.context.addNewNote(data)
            this.props.history.push('/')
        })
        .catch(error => {
            this.setState({error})
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
                        id='name'/>
                    <label htmlFor='note-content'>Content</label>
                    <input
                        type='text' 
                        name='content'
                        id='content'/>
                    <label htmlFor='folder'>Folder</label>
                    <select 
                        id='folder-selection' 
                        name='folder-selection'
                        onChange={(e)=> this.setSelection(e.target.value)}
                        >
                        <option value='none'>Select one...</option>
                        {folderSelection}
                    </select>
                    <button type='submit'>Add Note</button>
                </form>
            </div>
        )
    }
}