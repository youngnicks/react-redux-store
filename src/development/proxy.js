'use strict';

const express = require('express');
const proxy = require('http-proxy-middleware');
const app = express();

const client = 'http://localhost:3000';
const server = 'http://localhost:8529/_db/react/store/';

app.use('/api', proxy({target: server}));
app.use('/', proxy({target: client}));

app.listen(8080);
