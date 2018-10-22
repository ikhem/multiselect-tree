import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import DownShift from 'downshift';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

const styles = {
  select: {
    width: 150,
  },
  main: {
    display: 'flex',
  },
  kdshift: {
    paddingLeft: 20,
  }
}

class AddDialog extends React.Component {
  state = { title: '', type: '' }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleSubmit = (event) => {
    console.log({ event: event.target })
    this.setState({ open: false });
  }

  handleChange = (event) => {
    this.setState({ type: event.target.value})
  }

  render() {
    const { open, type, classes } = this.props;
    return (
      <Dialog
        open={open}
        onClose={this.props.handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
        className={classes.root}
      >
        <DialogTitle id="form-dialog-title">Create List</DialogTitle>
        <DialogContent className={classes.main}>
          <div className={classes.typeSelect}>
            <Select
              value={this.state.type}
              onChange={this.handleChange}
              className={classes.select}
            >
              { type ? 
                type.map((item) => (
                  <MenuItem 
                    value={item}
                    key={item}
                  >
                    {item}
                  </MenuItem>
                )) : null
              }
            </Select>
          </div>

          <div className={classes.kdshift}>
          {
            type === 'Categories' && (
              <DownShift>
              {({ 
                isOpen, 
                toggleMenu, 
                getInputProps 
              }) => (
                <div>
                  <TextField
                    InputProps = {
                      {...getInputProps({ onClick: () => toggleMenu() })}
                    }
                  />

                  {
                    isOpen && (
                      <Paper>
                        <MenuItem>

                        </MenuItem>
                      </Paper>
                    )
                  }
                </div>
              )}
              </DownShift>  
            )
          }
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
  )};
};

AddDialog.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(AddDialog);