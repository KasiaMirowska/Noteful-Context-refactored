import React from 'react';
import PropTypes from 'prop-types';
import './SidePanel3.css';

export default function SidePanel3(props) {
        return (
            <div className='side-panel3'>
                <button className='panel3' type='button' onClick={() => props.history.goBack()}>Back</button>
              
            </div>
        )
    
}
SidePanel3.propTypes = {
    history: PropTypes.object.isRequired,

}