import React from 'react';
import { Link } from 'react-router';

export default props => (
  <div>
    <h1>React Store</h1>
    <ul role="navigation">
      <li><Link to="/requests">Requests</Link></li>
    </ul>
    {props.children}
  </div>
);
