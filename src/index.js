import React from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Root from './app/Root';
import configureStore from './store/configureStore';
import './index.css';

// Needed for onTouchTap
injectTapEventPlugin();

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

render((
  <MuiThemeProvider>
    <Root store={store} history={history} />
  </MuiThemeProvider>
), document.getElementById('root'));
