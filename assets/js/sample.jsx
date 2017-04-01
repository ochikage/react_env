import React from 'react'
import ReactDOM from 'react-dom'

import {BrowserRouter, Match, Miss, Link} from 'react-router'
import {TwitterPicker, Twitter} from 'react-color';

console.log(Twitter);

class ColorSample extends React.Component {
    render() {
        return(
            <TwitterPicker 
            />
        );
    }
}

ReactDOM.render(<ColorSample />, document.getElementById('color'));
