import React from 'react';
import { Segment, Header, Button, Icon, } from 'semantic-ui-react';
import AddCard from './AddCard'
class FlashCard extends React.Component {
  state = {showAnswer: false, editing: false, }
  toggleAnswer = () => {
    this.setState({ showAnswer: !this.state.showAnswer})
  }
  toggleEditing = () => {
    this.setState({ editing: !this.state.editing})
  }
  handleRemove = () => {
    this.props.remove(this.props.id)
  }
  render() {
    const {question, answer, } = this.props;
    const { showAnswer, editing, } = this.state;
    return (
      <Segment>
        {editing ?
        <AddCard {...this.props} toggle={this.toggleEditing}/>
        :
        showAnswer ? <Header as="h3">{answer}</Header> : <Header as="h2">{question}</Header>
        }
        <Button icon color="green" onClick={this.toggleAnswer}>
          <Icon name="redo" />
        </Button>
        <Button icon color="blue" onClick={this.toggleEditing}>
          <Icon name="edit outline" />
        </Button>
        <Button icon color="red" onClick={this.handleRemove}>
          <Icon name="trash" />
        </Button>
      </Segment>

      )
    }
  }
export default FlashCard;