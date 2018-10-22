import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

const styles =  {
  root: {
    width: '100%',
  },
  header: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: 75,
    backgroundColor: 'blue',
  },
  addBtn: {
    height: 35,
    width: 35,
    color: 'white',
    backgroundColor: 'Orange',
    margin: 15,
  },
}

class App extends Component {

  state = { isOpen: false };

  openDialog = () => {
    this.setState({ isOpen: true });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <header className={classes.header}>
          <Button 
            className={classes.addBtn}
            onClick={this.openDialog}  
          >
            +
          </Button>
        </header>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(App);
