import React, { Fragment, } from 'react';
import { Header, } from 'semantic-ui-react';
import GameBoard from './extra/GameBoard'
const About = () => (
  <Fragment>
    <Header as="h1">Tic-Tac-Toe</Header>
    <GameBoard />
  </Fragment>

)
export default About;