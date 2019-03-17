import React from 'react';
import { Grid, } from 'semantic-ui-react';
import Square from './Square'

const GameBoard = () => (
  <Grid columns={3} celled divided>
    <Grid.Row style={{height: "150px",}}>
      <Grid.Column>
        <Square />
      </Grid.Column>
      <Grid.Column>
        <Square />
      </Grid.Column>
      <Grid.Column>
        <Square />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row style={{height: "150px",}}>
      <Grid.Column>
        <Square />
      </Grid.Column>
      <Grid.Column>
        <Square />
      </Grid.Column>
      <Grid.Column>
        <Square />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row style={{height: "150px",}}>
      <Grid.Column>
        <Square />
      </Grid.Column>
      <Grid.Column>
        <Square />
      </Grid.Column>
      <Grid.Column>
        <Square />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)
export default GameBoard;