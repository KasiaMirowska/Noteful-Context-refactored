import React from 'react';
import './ONSidePanel.css'
import { Link } from 'react-router-dom';

export default function ONSidePanel(props) {
    console.log(props)
    const note = props.notes.find(note => note.id === props.match.params.openNoteId);
    console.log(note)
    const openFolderId = note.folderId;
    console.log(openFolderId)
    const openFolder = props.folders.find(folder => folder.id === openFolderId);
    
    return (
        <div>
            <h2>Note Folder: </h2>
            <div className='ONside-panel'>
                <Link className='folder' to= {`/folder/${openFolderId}`} className="link"> 
                    <h3>{openFolder.name}</h3>
                </Link>
            </div>  
            <button className='side-button'>Go back</button>    
        </div>
    );
}