import React, { Component, Fragment } from 'react';
import { Icon, } from 'semantic-ui-react'
class Square extends Component {
  state = { showX: false, }
  toggleX = () => {
    this.setState({ showX: !this.state.showX, })
  }
  render() {
    const { showX, } = this.state;
    return (
      <div onClick={this.toggleX} style={{ width: "100%", height: "100%", }}>
        {showX ? <Icon name="x" size={"massive"}/> : null}
      </div>
    )
  }
}
export default Square;

