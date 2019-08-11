import React from 'react';              


export default class Errors extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hasError: false,
        }
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render(){
        if (this.state.hasError === true) {
            console.log('HERE????????')
            return(
                <div className='errors'>
                   <p>We apologize for inconvienience but there is an error! </p>
                </div>
            )
        }
        return this.props.children;
        
    }
}