import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

render(
    <Router history={browserHistory} routes={routes} />
  , document.getElementById('root'));
