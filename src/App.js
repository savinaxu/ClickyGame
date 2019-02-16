import React, { Component } from 'react';
import Footer from './components/Footer'
import Title from './components/Title'
import Navbar from './components/Navbar'
import Wrapper from './components/Wrapper'
import Images from './components/Images'
import ImageJson from './ImageJson'

class App extends Component {
    state = {
        ImageJson,
        clickedCharacters: [],
        score: 0,
        topScore: 0,
        navMessage: "Click an image to begin!"
    }

    scoreChecker = id => {
        let character = this.state.clickedCharacters
        if(character.length !== 0 && character.includes(id)) {
            this.setState({
                clickedCharacters: [],
                score: 0,
                navMessage: "Incorrect guess!"
            })
        } else {
            character.push(id)
            this.setState({
                score: this.state.score += 1,
                navMessage: "Correct!",
                clickedCharacters: character
            })
            if (this.state.score > this.state.topScore) {
                this.setState({
                    topScore: this.state.score
                })
            }
        }
    }

    // randomCharacter = () => {
    //     let characters = this.state.ImageJson
    //     let randomChar = []
    //     let random = Math.floor(Math.random()* characters.length)
    //     for (let i = 0; i < characters.length; i++) {
    //         randomChar.push(characters[random])
    //         characters.splice(random, 1)
    //     }
    // }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const tempStore = array[i];
            array[i] = array[j];
            array[j] = tempStore;
        }
        return array;
    }


    render() {
        const shuffledCharacters = this.shuffleArray(this.state.ImageJson)
        return (
            <Wrapper>
                <Navbar 
                    navMessage={this.state.navMessage}
                    score={this.state.score}
                    topScore={this.state.topScore}
                />
                <Title />
                <div className="card-container"> 
                    {shuffledCharacters.map(character => (
                        <Images 
                            score={this.state.score}
                            topScore={this.state.topScore}
                            id={character.id}
                            key={character.key}
                            name={character.name}
                            image={character.image}
                            scoreChecker={this.scoreChecker}
                        />
                    ))}
                </div>
                <Footer />
            </Wrapper>
        )
    }
}

export default App