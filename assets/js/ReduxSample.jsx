import React from 'react'
import ReactDOM from 'react-dom'

export default class ReduxSample extends React.Component {
    render() {
        return(
            <div>
                <span>{this.props.value}</span>
                <button onClick={()=>this.props.handleClick()}>incr</button>
            </div>
        );
    }
}

