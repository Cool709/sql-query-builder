/* eslint-disable react/prop-types */
import React from 'react';

import { TextField, Typography } from '@material-ui/core';

export const QueryEditor = ({ query, setQuery }) => {
  return (
    <>
      <Typography variant="h5" color="inherit">
        Input Query
      </Typography>
      <TextField
        multiline
        label="Input SQL"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        variant="outlined"
        rows={4}
      />
    </>
  );
};
