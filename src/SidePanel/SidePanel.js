import React from 'react';
import NotefulContext from '../NotefulContext';
import './SidePanel.css';
import Folder from '../Folder/Folder';


export default class SidePanel extends React.Component {
    static contextType = NotefulContext;

    render(){
        console.log(this.context)
        const folders = this.context.folders.map(folder => {
            return <Folder 
                    key={folder.id}
                    id={folder.id}
                    name={folder.name}
                    filteredNotes={this.context.filteredNotes}
                    />
        })
        return (
            <div className='folder'>
                <h2>Note Folders</h2>
                {folders}
                <button type='button' className='side-button'>Add Folder</button>
            </div>
        )
    }
    
}

