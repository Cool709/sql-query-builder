/* eslint-disable prettier/prettier */
import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(() => ({
  appBar: {
    backgroundColor: '#000',
    paddingTop: '10px',
    paddingBottom: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

export const Footer = () => {
  const classes = useStyle();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Typography variant="body1" color="inherit">
        &copy; {new Date().getFullYear()} SQL Query Builder - Atlan test assignment
      </Typography>
    </AppBar>
  );
};
