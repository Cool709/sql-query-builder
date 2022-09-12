/* eslint-disable prettier/prettier */
import React from 'react';
import { LinearProgress } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  progress: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
      marginBottom: '20px'
    }
  }
}));

export const LinearProgressBar = () => {
  const classes = useStyle();

  return (
    <div className={classes.progress}>
      <LinearProgress />
    </div>
  );
};
