import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import DownshiftSelectTree from './components/DownshiftSelectTree';

import data from './data';

const styles = {

}

const App = () => {
  return (
    <DownshiftSelectTree 
      availabledata={data}
    />
  )
}

export default withStyles(styles)(App);
