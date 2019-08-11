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