import React from 'react'
import './Folder.css';
import { Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import PropTypes from 'prop-types';


function deleteFolderRequest(folderId, callback) {
    const url = 'http://localhost:9090/folders'
    fetch(url + `/${folderId}`, {
        method: 'DELETE',
    })
    .then(res => {
        if(!res.ok) {
            return res.json().then(error => {
                throw error
            })
        }
        return res.json()
    })
    .then(data => {
        callback(folderId)
    })
    .catch(error => {
        console.log(error)
    })
}

export default function Folder(props) {
    return (
        <NotefulContext.Consumer>
            {(context) => (
        <div className='folder'>
            <ul className='folder-list'>
                <li key={props.id} >
                    <Link to= {`/folder/${props.id}`} className="link"> 
                    <h3>{props.name}</h3>
                    <p>{props.amount}</p>
                    </Link>
                    <button onClick={() => deleteFolderRequest(props.id, context.deleteFolder)}>Delete folder</button>
                </li>
            </ul>
        </div> 
            )
         }
        </NotefulContext.Consumer> 
)

    
}
Folder.propTypes = {
    folders: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        amount: PropTypes.number,
    })),
    deleteFolder: PropTypes.func,
}
