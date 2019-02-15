import React, { Component } from 'react';

class Title extends Component {
    render() {
        return(
            <header className="header">
                <h1>Star Wars Memory Game!</h1>
                <h2>Click on an image to earn points, but don't click on any more than once!</h2>
            </header>
        )
    }
}

export default Title