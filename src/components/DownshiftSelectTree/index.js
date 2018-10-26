import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Downshift from 'downshift';

import Checkbox from '@material-ui/core/Checkbox';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import data from '../../data';

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

const DownShiftSelectTree = ({classes,availabledata}) => {
  console.log('data: ', availabledata);
  const isOpen=true;
  return (
    <div className={classes.root}>
      <h1>Categories</h1>
      <Downshift
        itemToString={(item) => (item ? item.value : '')}
      >
        {({getInputProps, getItemProps, isOpen, toggleMenu, highlightedIndex}) => (
          <div>
            <TextField 
              fullWidth
              {...getInputProps({ onClick: () => toggleMenu() })}
            />

            {
              isOpen && (
                <Paper square className={classes.paper}>
                  {
                    data.map((item, index) => (
                      <ListItem
                        key={index}
                        selected={highlightedIndex === index}
                        {...getItemProps({
                          item,
                          index,
                        })}
                      >
                        <Checkbox />
                        <ListItemText 
                          primary={item.label}                          selected={highlightedIndex === index}

                        />
                        {
                          item.children && (
                            <Collapse in={isOpen}>
                              <List>
                                {item.children.map((child) => (
                                  <ListItem>
                                    <Checkbox />
                                    <ListItemText primary={child.label} />
                                  </ListItem>
                                ))}
                              </List>
                            </Collapse>
                          )
                        }
                      </ListItem>
                    ))
                  }
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