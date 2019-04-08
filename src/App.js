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
    score: "",
    selectedCards: []
  };

  selectedImage = id => {
    let selectedCards = this.state.selectedCards;
    // eslint-disable-next-line default-case
    switch (selectedCards.indexOf(id) === -1) {
      case this.state.score === 11:
        // push that id into that id into the array to be stored
        selectedCards.push(id);
        console.log(selectedCards);
        // run the score function
        this.handleIncrement();
        // run the reshuffle function after each click
        this.cardShuffle();
        console.log("selected ONCE");
        alert("You won!");
        this.setState({
          score: 0,
          selectedCards: []
        });
        break;

      case this.setState():
        console.log("selected TWICE");
        alert("Sorry you LOST! You clicked an image twice!!");
        this.setState({
          score: 0,
          selectedCards: []
        });
        break;
    }
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
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
            <h1>Score: {this.state.score}</h1>
          </div>
        </div>
        <div className="row">
          {this.state.cards.map(card => (
            <Card
              removeCard={this.removeCard}
              id={card.id}
              name={card.name}
              image={card.image}
              occupation={card.occupation}
              location={card.location}
              alt={card.alt}
              selectedImage={this.selectedImage}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
