import React from 'react'
import './Folder.css';
import { Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import PropTypes from 'prop-types';
import APIcalls from '../API_service';


export default class Folder extends React.Component {
    static contextType = NotefulContext;

    deleteFolderRequest = (folderId, callback) => {
        APIcalls.deleteFolderRequest(folderId, callback)
        .then(data => {
            callback(folderId)
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    filteredNotesAmount = () => {
        let notes = this.context.notes
        return notes.filter((note) => note.folderId === this.props.id).length 
      }
       
    render(){
        console.log(this.props)
       return (
            <div className='folder'>
                <ul className='folder-list'>
                    <li key={this.props.id} >
                        <Link to= {`/folder/${this.props.id}`} className="link"> 
                            <h3>{this.props.name}</h3>
                        </Link>
                        
                        <p>{this.filteredNotesAmount()}</p>
                        
                        <button onClick={() => this.deleteFolderRequest(this.props.id, this.context.deleteFolder)}>
                            Delete folder
                        </button>
                    </li>
                </ul>
            </div> 
             
    )
    } 
    

    
}
Folder.propTypes = {
    folders: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    })),
}
