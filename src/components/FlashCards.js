import React from 'react';
import FlashCard from './FlashCard';
import AddCard from './AddCard'
class FlashCards extends React.Component {
  state = {
    cards: [
      { id: 1, question: "What is the meaning of life?" , answer: "42" ,},
      { id: 2, question: "Question 2" , answer: "Answer 2" ,},
      { id: 3, question: "Question 3" , answer: "Answer 3" ,},
      { id: 4, question: "Question 4" , answer: "Answer 4" ,},
      { id: 5, question: "Question 5" , answer: "Answer 5" ,},
      { id: 6, question: "Question 6" , answer: "Answer 6" ,},
    ]
  }
  renderCards = () => {
    return this.state.cards.map( card => <FlashCard key={card.id} {...card}/> );
  }
  add = (card) => {
    const { cards, } = this.state;
    const newCard = { id: this.getId(), ...card }
    this.setState({ cards: [newCard, ...cards]})
  }
  getId = () => Math.floor((1 + Math.random()) * 10000)
  render() {
    return (
      <div>
        <AddCard add={this.add}/>
        {this.renderCards()}
      </div>
    )
  }
}
export default FlashCards;
