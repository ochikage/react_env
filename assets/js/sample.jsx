import React from 'react'
import ReactDOM from 'react-dom'

//
// see http://wannabe-jellyfish.hatenablog.com/entry/2016/03/06/034101
//
require('bootstrap/dist/css/bootstrap.css');

import {BrowserRouter, Match, Miss, Link} from 'react-router'

var Hello = React.createClass({
    render: function() {
        return(
        <div>
          <nav className="navbar navbar-default navbar-fixed-top">
              <div className="navbar-header">
              <a href="#" className="navbar-brand">Bootstrap test</a>
              </div>
          </nav>
          <br />
          <br />
          <h1>Hello, React!</h1>
        </div>
        );
    }
});

ReactDOM.render(<Hello />, document.getElementById('hello'));
