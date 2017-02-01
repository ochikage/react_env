import React from 'react'
import ReactDOM from 'react-dom'

import {BrowserRouter, Match, Miss, Link} from 'react-router'

var Hello = React.createClass({
    render: function() {
        return(<h1>Hello, React!</h1>);
    }
});

ReactDOM.render(<Hello />, document.getElementById('hello'));
