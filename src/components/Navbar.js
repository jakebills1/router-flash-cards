import React from 'react';
import { Menu, } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';
const Navbar = () => (
  <Menu>
    <Link to='/'>
      <Menu.Item>
        Home
      </Menu.Item>
    </Link>
    <Link to='/cards'>
      <Menu.Item>
        Flash Cards
      </Menu.Item>
    </Link>
    <Link to='/studybreak'>
      <Menu.Item>
        Study Break
      </Menu.Item>
    </Link>
  </Menu>
)
export default Navbar;