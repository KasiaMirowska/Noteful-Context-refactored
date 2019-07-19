import React from 'react'
import './Folder.css';
import { Link } from 'react-router-dom';

export default function Folder(props) {
    
    return (
        <div className='folder'>
            <ul className='folder-list'>
                <li id={props.id} >
                    <Link to= {`/folder/${props.id}`} className="link"> 
                    <h3>{props.name}</h3>
                    </Link>
                </li>
            </ul>
        </div>  
)

    
}

