import React, { Component } from 'react'

class Defult extends Component {
    render() {
        console.log(this.props);
        
        return (
            <div className='not-font'>
                <div className='inner-model'>
                    <h3> page not found </h3>
                    <h6>this path <span>{this.props.location.pathname}</span> not found</h6>
                </div>
            </div>
        )
    }
}

export default Defult
