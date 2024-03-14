// импорты
require('@babel/register');
const express = require('express');
const app = express();
const path = require('path');
const indexRoute = require('./routes/index.route');

// мидлвары
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
const ssr = require('./middlewares/ssr');

// роуты
app.use(ssr);
app.use('/', indexRoute);

// листенер
app.listen(3000, () => {
  console.log('All good!');
});
