import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import { data } from "../data";

export default class Cards extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      cardsFlipped: [],
      moves: 0,
    };
  }

  componentDidMount() {
    const shuffled = data.sort(() => Math.random() - 0.5);
    console.log(shuffled);
    this.setState({ cards: shuffled });
  }

  componentDidUpdate() {
    this.handleCardMatch();
    this.handleGameCompletion();
  }

  componentWillUnmount() {
    this.setState({ cards: data });
  }

  handleCardFlip = (cardId) => {
    const { cards, cardsFlipped } = this.state;
    if (cardsFlipped.length !== 2) {
      let filtered = cards.map((card) => {
        if (card.cardId === cardId) {
          card.isFlipped = true;
        }
        return card;
      });
      this.setState({ cards: filtered });

      let flipped = cards.filter((card) => card.cardId === cardId);

      if (flipped[0]) {
        this.setState({
          cardsFlipped: [...this.state.cardsFlipped, ...flipped],
        });
      }
    }
  };

  handleCardMatch = () => {
    let cardsFlipped = this.state.cardsFlipped;
    let cards = this.state.cards;

    if (cardsFlipped.length === 2) {
      if (cardsFlipped[0].id === cardsFlipped[1].id) {
        cards = cards.map((card) => {
          if (card.id === cardsFlipped[0].id) {
            return { ...card, isMatched: true };
          }
          return card;
        });
        setTimeout(() => {
          this.setState({
            cards: cards,
            cardsFlipped: [],
            moves: this.state.moves + 1,
          });
        }, 1000);
      } else {
        cards = cards.map((card) => {
          if (
            card.id === cardsFlipped[0].id ||
            card.id === cardsFlipped[1].id
          ) {
            return { ...card, isFlipped: false };
          }
          return card;
        });
        setTimeout(() => {
          this.setState({
            cards: cards,
            cardsFlipped: [],
            moves: this.state.moves + 1,
          });
        }, 1000);
      }
    }
  };

  handleGameCompletion = () => {
    let { cards } = this.state;
    let filter = cards.filter((card) => !card.isMatched);
    if (filter.length === 0) {
      setTimeout(() => {
        alert(
          `Congratulations, Game Completed in 0 minutes and 0 seconds and total moves are ${this.state.moves}`
        );
      }, 400);
    }
  };

  render() {
    const { cards, moves } = this.state;
    return (
      <>
        <div className="container">
          <h1 className="heading">Memory Game</h1>
          <div className="score-panel">
            <span className="moves"> {moves} Move(s) </span>
            <span className="time">0 min 0 sec</span>
          </div>
          <ul className="grid">
            {cards.map((card) => {
              return (
                <li
                  className="card"
                  key={uuid()}
                  onClick={() => this.handleCardFlip(card.cardId)}
                >
                  {card.isFlipped ? (
                    <div className="img">{card.img}</div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}
