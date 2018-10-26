import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Downshift from 'downshift';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
  }
}

const DownShiftSelectTree = ({classes}) => {
  return (
    <div className={classes.root}>
      <h1>Categories</h1>
      <Downshift />
    </div>
  )
};

DownShiftSelectTree.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(DownShiftSelectTree);