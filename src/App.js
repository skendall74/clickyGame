import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    cards: cards,
    score: "0"
  };

  componentDidMount() {
    this.createCard();
  }

  createCard = id => {
    const cards = this.statecards;
    this.setState({ cards });
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const cards = this.state.cards.filter(card => card.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ cards });
  // };

  // Map over this.state.friends and render a Card component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        <div className="row">
          <div className="col m12">
            <h1>My Score: {this.state.score}</h1>
          </div>
        </div>
        <div className="row">
          {this.state.cards.map(card => (
            <Card
              // removeCard={this.removeCard}
              id={card.id}
              key={card.id}
              image={card.image}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
