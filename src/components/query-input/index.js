/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from 'react';

import { Card, Button } from '@material-ui/core';

import RecentQueryList from './recent-query-list';
import { QueryEditor } from './query-editor';

import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(() => ({
  queryContainer: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  }
}));

export const QueryInput = ({
  query,
  setQuery,
  queryListOpened,
  recentQueries,
  collapseQueryList,
  executeQuery
}) => {
  const classes = useStyle();

  return (
    <Card className={classes.queryContainer}>
      <QueryEditor query={query} setQuery={(val) => setQuery(val)} />
      <Button variant="contained" color="secondary" onClick={() => executeQuery()}>
        Execute
      </Button>
      <RecentQueryList
        queryListOpened={queryListOpened}
        collapseQueryList={(opened) => collapseQueryList(opened)}
        recentQueries={recentQueries}
        executeQuery={() => executeQuery()}
      />
    </Card>
  );
};
