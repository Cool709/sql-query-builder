/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';

import DataTable from 'react-data-table-component';
import {
  QueryBuilder,
  Language as MenuIcon,
  ArrowDownward as SortIcon,
  ExpandLess,
  ExpandMore,
  Code
} from '@material-ui/icons';

import {
  Container,
  AppBar,
  Card,
  IconButton,
  Toolbar,
  LinearProgress,
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

const apiUrls = [
  'https://jsonplaceholder.typicode.com/comments',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums',
  'https://jsonplaceholder.typicode.com/photos'
];

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: '15px',
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  appBar: {
    backgroundColor: '#000'
  },
  progress: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
      marginBottom: '20px'
    }
  },
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

const customTableStyle = {
  rows: {
    style: {
      minHeight: '50px'
    }
  },
  cells: {
    style: {
      padding: '5px'
    }
  }
};

const getRandomInteger = (max) => {
  return Math.floor(Math.random() * max);
};

const LinearIndeterminate = () => {
  const classes = useStyle();

  return (
    <div className={classes.progress}>
      <LinearProgress />
    </div>
  );
};

function App() {
  const classes = useStyle();

  const [columns, setColumns] = useState([]);

  const [pending, setPending] = useState(true);

  const [queryListOpen, setQueryListOpen] = useState(false);

  const [data, setData] = useState([]);

  const [sql, setSql] = useState('Select * from customers;');

  const [recentQueries, setRecentQueries] = useState(['Select * from customers;']);

  const handleQueryListOpen = () => {
    setQueryListOpen(!queryListOpen);
  };

  const manageRecentQueries = () => {
    if (!recentQueries.includes(sql)) {
      setRecentQueries([...recentQueries, sql]);
    }
  };

  const renderQueryResult = () => {
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
    renderQueryResult();
  }, []);

  return (
    <div className="App">
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
      <Container className={classes.root}>
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
            <ListItem button onClick={() => handleQueryListOpen()}>
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
        <Card>
          <DataTable
            title="Query Result"
            columns={columns}
            data={data}
            sortIcon={<SortIcon />}
            customStyles={customTableStyle}
            progressPending={pending}
            progressComponent={<LinearIndeterminate />}
            pagination
          />
        </Card>
      </Container>
    </div>
  );
}

export default App;
