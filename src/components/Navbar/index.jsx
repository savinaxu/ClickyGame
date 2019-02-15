import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return(
            <nav className="navbar">
                <div>
                    <a className="logo" href="/">Star Wars Memory Game</a>
                </div>
                <div className="navMessage">{this.props.navMessage}</div>
                <div className="score">
                    <p>Score: {this.props.score}</p>
                    <p>Top Score: {this.props.topScore}</p>
                </div>
            </nav>
        )
    }
}

export default Navbar