import React from 'react';
import PropTypes from 'prop-types';

export default function SidePanel3(props) {
    console.log(props)
        return (
            <div>
                <button type='button' onClick={() => props.history.goBack()}>Back</button>
            </div>
        )
    
}
SidePanel3.propTypes = {
    history: PropTypes.object.isRequired,

}