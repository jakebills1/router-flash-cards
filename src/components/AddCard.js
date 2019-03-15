import React from 'react';
import { Form, } from 'semantic-ui-react';
class AddCard extends React.Component {
  state = { question: "", answer: ""}
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({ question: "", answer: ""})
  }
  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Input 
          label="Question"
          placeholder="Question"
          name="question"
          value={this.state.question}
          onChange={this.handleChange}
          />
          <Form.Input 
          label="Answer"
          placeholder="Answer"
          name="answer"
          value={this.state.answer}
          onChange={this.handleChange}
          />
          <Form.Button color="blue" onClick={this.handleSubmit}>Submit</Form.Button>
        </Form.Group>
      </Form>
    )
  }
}
export default AddCard;