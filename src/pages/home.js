/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';

import DataTable from 'react-data-table-component';

import { ArrowDownward as SortIcon } from '@material-ui/icons';

import { Container, Card } from '@material-ui/core';

import { getRandomInteger } from '../utils/helper';
import { apiUrls } from '../utils/constants';
import { makeStyles } from '@material-ui/core/styles';

import { customTableStyle } from '../utils/styles';

import { LinearProgressBar } from '../components/linear-progress-bar';
import { QueryInput } from '../components/query-input';

const useStyle = makeStyles(() => ({
  root: {
    marginTop: '15px',
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  }
}));

const Home = () => {
  const classes = useStyle();

  const [columns, setColumns] = useState([]);

  const [pending, setPending] = useState(true);

  const [queryListOpen, setQueryListOpen] = useState(false);

  const [data, setData] = useState([]);

  const [query, setQuery] = useState('Select * from customers;');

  const [recentQueries, setRecentQueries] = useState(['Select * from customers;']);

  const manageRecentQueries = () => {
    if (!recentQueries.includes(query)) {
      setRecentQueries([...recentQueries, query]);
    }
  };

  const executeQuery = () => {
    manageRecentQueries();
    fetch(apiUrls[getRandomInteger(4)])
      .then((response) => response.json())
      .then((response) => {
        const tempColumns = [];
        Object.keys(response[0]).map((value, idx) => {
          const columnData = {
            name: value[0].toUpperCase() + value.slice(1),
            selector: value,
            sortable: true,
            wrap: 'true',
            width: idx < 2 ? '90px' : ''
          };
          tempColumns.push(columnData);
          setPending(false);
        });
        setColumns(tempColumns);
        setData(response);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    executeQuery();
  }, []);

  return (
    <div className="main">
      <Container className={classes.root}>
        <QueryInput
          query={query}
          setQuery={(val) => setQuery(val)}
          queryListOpened={queryListOpen}
          collapseQueryList={(open) => setQueryListOpen(open)}
          recentQueries={recentQueries}
          executeQuery={() => executeQuery()}
        />
        <Card>
          <DataTable
            title="Query Result"
            columns={columns}
            data={data}
            sortIcon={<SortIcon />}
            customStyles={customTableStyle}
            progressPending={pending}
            progressComponent={<LinearProgressBar />}
            pagination
          />
        </Card>
      </Container>
    </div>
  );
};

export default Home;
