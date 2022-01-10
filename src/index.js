import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './global';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './firebaseConfig';
import 'antd/dist/antd.css';

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <App/>
  </Router>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
