/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from 'react';

import { QueryBuilder, ExpandLess, ExpandMore } from '@material-ui/icons';

import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';

import { RecentCollapse } from './recent-collapse';

const RecentQueryList = ({ queryListOpened, collapseQueryList, recentQueries, executeQuery }) => {
  return (
    <List component="div">
      <ListItem button onClick={() => collapseQueryList(!queryListOpened)}>
        <ListItemIcon>
          <QueryBuilder />
        </ListItemIcon>
        <ListItemText primary="Recent Queries"></ListItemText>
        {queryListOpened ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <RecentCollapse
        queryListOpened={queryListOpened}
        recentQueries={recentQueries}
        executeQuery={() => executeQuery()}
      />
    </List>
  );
};

export default RecentQueryList;
