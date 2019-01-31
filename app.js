//spins up express to
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

mongoose.connect('mongodb://connect-core:' +
  process.env.MONGO_ATLAS_PW +
  '@connect-core-shard-00-00-burwr.mongodb.net:27017,connect-core-shard-00-01-burwr.mongodb.net:27017,connect-core-shard-00-02-burwr.mongodb.net:27017/test?ssl=true&replicaSet=connect-core-shard-0&authSource=admin&retryWrites=true',
  { useNewUrlParser: true }
);
//for logging
app.use(morgan('dev'));

//To parse post body
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//Handle CORS in broswers
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (request.method === 'OPTIONS') {
    response.header(
      'Access-Control-Allow-Headers',
      'GET, POST, DELETE, PATCH'
    );
    return response.status(200).json({});
  }
  next();
});
//use route that coreponses to given endpoint
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

//If you get past this, the endpoint doesn't exist so we return=404
//Or something went wrong and we return http=500
app.use('/', (request, response, next) => {
  const error = new Error('Not Found')
  error.status = 404;
  next(error);
});

app.use((error, equest, response, next) => {
  response.status(error.status || 500);
  response.json({
    error: {
      message: error.message
    }
  });
});


module.exports = app;
