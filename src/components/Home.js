import React from 'react';
import { Header, } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';
const Home = () => (
  <div>
    <Header as="h1">Welecome to the flash cards app!</Header>
    <p>This is a learning tool where you can create you own flash cards to study whatever topic you choose with!</p>
    <Link to="/cards">Go to flash cards</Link>
  </div>
)
export default Home;