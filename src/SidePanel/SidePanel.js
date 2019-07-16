import React from 'react';
import './SidePanel.css';
import Folder from '../Folder/Folder';


export default function SidePanel(props) {
    
    const folders = props.folders.map(folder => {
        return <Folder 
                key={folder.id}
                id={folder.id}
                name={folder.name}
                filteredNotes={props.filteredNotes}
                highLight={props.highLight}/>
    })
    return (
        <div className='side-panel'>
            <h2>Note Folders</h2>
            {folders}
            <button type='button' className='side-button'>Add Folder</button>
        </div>
    )
}

