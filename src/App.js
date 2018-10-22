import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import AddDialog from './components/AddDialog';

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
    height: '60%',
    color: 'white',
    backgroundColor: 'Aqua',
    margin: 15,
    fontSize: 25,
  },
}

class App extends Component {

  state = { isOpen: false, type: ['Tags', 'Categories'] };

  openDialog = () => {
    this.setState({ isOpen: true });
  }

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;
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
        { isOpen ? 
          <AddDialog
            open={isOpen}
            handleClose={this.handleClose}
            type={this.state.type}
          /> 
          : null 
        }
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(App);
