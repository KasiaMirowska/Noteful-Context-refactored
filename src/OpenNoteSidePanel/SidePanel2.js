import React from 'react';
import NotefulContext from '../NotefulContext';
import './ONSidePanel.css'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



export default class SidePanel2 extends React.Component {
    static contextType = NotefulContext;
    
    render() {
        const note = this.context.notes.find(note => note.id === this.props.match.params.openNoteId);
        if(note){
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
                <button className='side-button' onClick={() => this.props.history.goBack()}>Go back</button>    
            </div>
        );
    } else {
        return null;
    }
}
    
}

SidePanel2.propTypes = {
    folders: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    })),
    notes: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        folderId: PropTypes.string.isRequired,
    })),
    history: PropTypes.object
}