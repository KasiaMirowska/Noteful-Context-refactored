import React from 'react';
import NotefulContext from '../NotefulContext';
import './ONSidePanel.css'
import { Link } from 'react-router-dom';

export default class ONSidePanel extends React.Component {
    static contextType = NotefulContext;
    render() {
        const note = this.context.notes.find(note => note.id === this.props.match.params.openNoteId);
        const openFolderId = note.folderId;
        const openFolder = this.context.folders.find(folder => folder.id === openFolderId);
        
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
    
}