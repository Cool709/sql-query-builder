/* eslint-disable prettier/prettier */
import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Language as MenuIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(() => ({
  appBar: {
    backgroundColor: '#000'
  }
}));

export const Header = () => {
  const classes = useStyle();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit">
          SQL Query Builder
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
