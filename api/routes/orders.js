const express = require('express');
const router = express.Router();

/*
  TODO: 1) create model for order
*/
router.get('/', (request, response, next) => {
  response.status(200).json({
    message: 'Handling Order GET Requests'
  });
});

router.post('/', (request, response, next) => {
  response.status(201).json({
    message: 'Handling Order POST Requests'
  });
});

router.get('/:orderId', (request, response, next) => {
  const id = request.params.orderId;
  response.status(200).json({
    message: 'Your order has been recieved',
    id: id
  });
});

router.delete('/:orderId', (request, response, next) => {
  const id = request.params.orderId;
  response.status(200).json({
    message: 'Your order has been DELETED',
    id: id
  });
});

module.exports = router;
