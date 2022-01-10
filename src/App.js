import React from 'react';
import './App.css';
import Home from './component/Home';
import { Route, Switch } from 'react-router-dom';
import Account from './Account';
import Contact from './Contact';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route path={'/account'} component={Account} />
        <Route path={'/contact'} component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
