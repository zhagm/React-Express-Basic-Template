const PORT = process.env.PORT || 8000;

// REQUIRES
require('dotenv').config();
const express = require('express');
const router = express.Router();
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config.js');

// APP DECLARATION
const app = express();

// GENERAL MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('build'));

// WEBPACK CONFIGURATION
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

// ROUTES
app.use('/api', require('./routes/api'));
app.get('/', (req, res) => {
  res.sendFile(path.resolve('index.html'));
});

// SERVER LISTEN
app.listen(PORT, err => {
  console.log(err || `Server listening on port ${PORT}`)
});
