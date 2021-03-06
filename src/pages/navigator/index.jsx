import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Navigator extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/login">Login <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                        <li className="nav-item test">
                            <Link className="nav-link" to="/canvas">Canvas</Link>
                        </li>
                        <li className="nav-item music">
                            <Link className="nav-link" to="/music">Music</Link>
                        </li>
                        <li className="nav-item video">
                            <Link className="nav-link" to="/video">Video</Link>
                        </li>
                        <li className="nav-item hooks">
                            <Link className="nav-link" to="/hooks">Hooks</Link>
                        </li>
                        {/* <li className="nav-item react_redux">
                            <Link className="nav-link" to="/react_redux">React_redux</Link>
                        </li> */}

                    </ul>

                </div>
            </nav>
        )
    }
}