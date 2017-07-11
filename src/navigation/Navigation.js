import React, { Component } from 'react';

    import './Navigation.css';

    class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
        <div>
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">                        
                        <ul className="nav navbar-nav navbar-left">
                            <li><a href="./App.js">MY TRAVEL SITE</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="./App.js">Home</a></li>
                            <li><a href="./App.js">About</a></li>
                            <li><a href="./App.js">Stuff</a></li>
                            <li><a href="./App.js">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        );
    }
    }

    export default Navigation;