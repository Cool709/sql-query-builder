/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React from 'react';

import { Code } from '@material-ui/icons';

import { List, ListItem, Collapse, ListItemText, ListItemIcon } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(() => ({
  nested: {
    paddingLeft: '40px'
  }
}));

export const RecentCollapse = ({ queryListOpened, recentQueries, executeQuery }) => {
  const classes = useStyle();

  return (
    <Collapse in={queryListOpened} timeout="auto" unmountOnExit>
      <List component="div">
        {recentQueries.map((value, index) => {
          return (
            <ListItem key={index} button className={classes.nested} onClick={() => executeQuery()}>
              <ListItemIcon>
                <Code />
              </ListItemIcon>
              <ListItemText primary={value} />
            </ListItem>
          );
        })}
      </List>
    </Collapse>
  );
};
