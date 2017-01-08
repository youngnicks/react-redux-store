import React from 'react';
import { Route } from 'react-router';
import App from './app/App';
import RequestList from './requests/ListPage';
import RequestDetail from './requests/DetailPage';

export default (
  <Route path="/" component={App}>
    <Route path="/requests" component={RequestList} />
    <Route path="/requests/:id" component={RequestDetail} />
  </Route>
);
