import React, { Component, Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home'
import StudyBreak from './components/StudyBreak'
import NoMatch from './components/NoMatch'
import Navbar from './components/Navbar'
import FlashCards from './components/FlashCards';
import { Container } from 'semantic-ui-react';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/cards' component={FlashCards} />
            <Route exact path='/studybreak' component={StudyBreak} />
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </Fragment>
    );
  }
}


export default App;


