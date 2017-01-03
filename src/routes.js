import React from 'react';
import { Route } from 'react-router';
import App from './app/App';
import RequestList from './requests/pages/List';

export default (
  <Route path="/" component={App}>
    <Route path="/requests" component={RequestList} />
  </Route>
);
