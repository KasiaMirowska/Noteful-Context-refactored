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
                    amount={this.context.notes.length}
                    />
        })
        return (
            <div className='folder'>
                <h2>Note Folders</h2>
                {folders}
                <Link to='/newFolder'>
                    <button type='button' className='side-button'>
                        Add Folder
                    </button>
                </Link>
            </div>
        )
    }
    
}

SidePanel.propTypes = {
    folders: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }))
}