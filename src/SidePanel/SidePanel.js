import React from 'react';
import NotefulContext from '../NotefulContext';
import './SidePanel.css';
import Folder from '../Folder/Folder';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class SidePanel extends React.Component {
    static contextType = NotefulContext;

    render(){
        const folders = this.context.folders.map(folder => {
            return <Folder 
                    key={folder.id}
                    id={folder.id}
                    name={folder.name}
                    />
        })
        return (
            <div className='side-panel'>
                <div className='folders-header-container'>
                
                <Link to='/newFolder' className="link">
                    <button 
                        className='add-folder'
                        type='button'>
                            Add Folder
                    </button>
                </Link>
                <h2 className='folders-header'>Note Folders</h2>
                </div>
                <React.Fragment>
                {folders}
                </React.Fragment>
                
            </div>
        )
    };  
};

SidePanel.propTypes = {
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

