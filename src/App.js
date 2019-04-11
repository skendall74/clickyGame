import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards.json";

// shuffle function from stackoverflow - https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// By extending the React.Component class, Counter inherits functionality from it
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    count: 0,
    score: 0,
    highScore: 0,
    selectedCards: []
  };

  selectedImage = id => {
    let selectedCards = this.state.selectedCards;
    let score = this.state.score;
    let highScore = this.state.highScore;
    // Set this.state.cards equal to the new cards array
    // if the clicked image has an id of the indexed cards
    switch (selectedCards) {
      case selectedCards.indexOf(id) === -1:
        selectedCards.push(id);
        // run the score function
        this.handleIncrement();
        // run the reshuffle function after each click
        this.cardShuffle();
        break;

      case this.state.score === 12:
        alert("You WON!");
        this.setState({
          score: 0,
          selectedCards: []
        });
        break;

      case this.setState:
        this.setState({
          score: 0,
          selectedCards: []
        });
        alert("YOU LOST! You clicked an image twice!");
        break;

      case score > highScore:
        this.setState({
          highScore: score
        });
        break;
      default:
    }
   
    if (selectedCards.indexOf(id) === -1) {
      // push that id into that id into the array to be stored
      selectedCards.push(id);
      // run the score function
      this.handleIncrement();
      // run the reshuffle function after each click
      this.cardShuffle();
    } else if (this.state.score === 12) {
      alert("You WON!");
      this.setState({
        score: 0,
        selectedCards: []
      });
    } else {
      this.setState({
        score: 0,
        selectedCards: []
      });
      alert("YOU LOST! You clicked an image twice!");
    }

    if (score > highScore) {
      this.setState({
        highScore: score
      });
    }
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 }, () => {
      console.log(this.state.score);
    });
  };

  // shuffle up images
  cardShuffle = () => {
    this.setState({ cards: shuffle(cards) });
  };

  removeCard = id => {
    // Filter this.state.cards for cards with an id not equal to the id being removed
    const cards = this.state.cards.filter(card => card.id !== id);
    // Set this.state.cards equal to the new cards array
    this.setState({ cards });
  };

  // Map over this.state.friends and render a Card component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        <div className="row">
          <div className="col s12">
            <h1>High Score: {this.state.highScore}</h1>
            <h1>Score: {this.state.score}</h1>
          </div>
        </div>
        <div className="row">
          {cards.map(cards => (
            <Card
              key={cards.id}
              id={cards.id}
              name={cards.name}
              image={cards.image}
              occupation={cards.occupation}
              location={cards.location}
              alt={cards.alt}
              selectedImage={this.selectedImage}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
