import React from 'react';
import { Segment, Header, Button, Icon, } from 'semantic-ui-react';
class FlashCard extends React.Component {
  state = {showAnswer: false, }
  toggleAnswer = () => {
    this.setState({ showAnswer: !this.state.showAnswer})
  }
  render() {
    const {question, answer, } = this.props;
    return (
      <Segment>
        {this.state.showAnswer ? <Header as="h3">{answer}</Header> : <Header as="h2">{question}</Header>}
        <Button icon color="green" onClick={this.toggleAnswer}>
          <Icon name="redo" />
        </Button>
        <Button icon color="blue">
          <Icon name="edit outline" />
        </Button>
        <Button icon color="red">
          <Icon name="trash" />
        </Button>
      </Segment>

      )
    }
  }
export default FlashCard;