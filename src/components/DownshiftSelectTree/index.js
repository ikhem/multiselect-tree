import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Downshift from 'downshift';

import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper: {
    height: 300,
    overflowY: 'auto',
  }
}

const DownShiftSelectTree = ({classes}) => {
  return (
    <div className={classes.root}>
      <h1>Categories</h1>
      <Downshift>
        {({getInputProps, isOpen, toggleMenu}) => (
          <div>
            <TextField 
              fullWidth
              {...getInputProps({ onClick: () => toggleMenu() })}
            />

            {
              isOpen && (
                <Paper square className={classes.paper}>
                  <MenuItem>
                    {/* Trap */}
                  </MenuItem>
                </Paper>
              )
            }
          </div>
        )}
      </Downshift>
    </div>
  )
};

DownShiftSelectTree.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(DownShiftSelectTree);