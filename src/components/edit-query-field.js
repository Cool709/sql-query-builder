/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from 'react';

import { QueryBuilder, ExpandLess, ExpandMore, Code } from '@material-ui/icons';

import {
  Card,
  Button,
  TextField,
  Typography,
  List,
  ListItem,
  Collapse,
  ListItemText,
  ListItemIcon
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(() => ({
  queryContainer: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  nested: {
    paddingLeft: '40px'
  }
}));

export const EditQueryField = ({
  sql,
  setSql,
  queryListOpen,
  recentQueries,
  handleQueryListOpen,
  renderQueryResult
}) => {
  const classes = useStyle();

  return (
    <Card className={classes.queryContainer}>
      <Typography variant="h5" color="inherit">
        Query Edit Field
      </Typography>
      <TextField
        multiline
        label="Input SQL"
        value={sql}
        onChange={(e) => {
          setSql(e.target.value);
        }}
        variant="outlined"
        rows={4}
      />
      <Button variant="contained" color="secondary" onClick={() => renderQueryResult()}>
        Execute
      </Button>
      <List component="div">
        <ListItem button onClick={() => handleQueryListOpen(!queryListOpen)}>
          <ListItemIcon>
            <QueryBuilder />
          </ListItemIcon>
          <ListItemText primary="Recently Used Queries"></ListItemText>
          {queryListOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={queryListOpen} timeout="auto" unmountOnExit>
          <List component="div">
            {recentQueries.map((value, index) => {
              return (
                <ListItem
                  key={index}
                  button
                  className={classes.nested}
                  onClick={() => renderQueryResult()}>
                  <ListItemIcon>
                    <Code />
                  </ListItemIcon>
                  <ListItemText primary={value} />
                </ListItem>
              );
            })}
          </List>
        </Collapse>
      </List>
    </Card>
  );
};
