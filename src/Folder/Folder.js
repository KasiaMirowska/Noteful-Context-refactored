import React from 'react';
import './Folder.css';
import { Link } from 'react-router-dom';

export default function Folder(props) {
    const highlightClass = props.id === props.highLight ? 'highlighted' : '';
    return (<div className={`folder ${highlightClass}`} >
            <ul >
                <li id={props.id} >
                    <Link to= {`/folder/${props.id}`}> 
                    <h3>{props.name}</h3>
                    </Link>
                </li>
            </ul>
            </div>  
    )
}

