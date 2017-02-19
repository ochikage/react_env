import React from 'react'
import ReactDOM from 'react-dom'

//
// see http://wannabe-jellyfish.hatenablog.com/entry/2016/03/06/034101
//     http://qiita.com/zaburo/items/9447fa64e8bc302e2324
//
require('bootstrap/dist/css/bootstrap.css');
require('admin-lte/dist/css/AdminLTE.css');
require('admin-lte/dist/css/skins/skin-blue.min.css');

import {BrowserRouter, Match, Miss, Link} from 'react-router'

var Hello = React.createClass({
    render: function() {
        return(
        <div className="wrapper skin-blue">
          <header className="main-header">
            <a href="#" className="logo">Admin</a>
            <nav className="navbar navbar-static-top" role="navigation">
              <ul className="nav navbar-nav">
                <li><a href="">hoge</a></li>
              </ul>
            </nav>
          </header>
          <aside className="main-sidebar">
            <section className="sidebar">
              <ul className="sidebar-menu">
                <li className="header">menu</li>
                <li><a href="">Booking</a></li>
                <li><a href="">Assets</a></li>
              </ul>
            </section>
          </aside>
          <div className="content-wrapper">
            <section className="content-header">
              <h1>Title</h1>
            </section>
            <section className="content">
              <div className="box">
                <div className="box-header with-border">
                  <h3>box title</h3>
                </div>
                <div className="box-body">
                  <h3>box body</h3>
                </div>
              </div>
            </section>
          </div>
          <footer className="main-footer">
            <div className="pull-right hidden-xs">ver.0.0.1</div>
            <strong>Copyright &copy; 2017</strong>, All rights reserved.
          </footer>
        </div>
        );
    }
});

ReactDOM.render(<Hello />, document.getElementById('hello'));
