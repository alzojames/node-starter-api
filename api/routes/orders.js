const express = require('express');
const router = express.Router();
const Order = require('../models/order');
const mongoose = require('mongoose');
/*
  TODO: 1) create model for order
*/


// router.get('/', (request, response, next) => {
//   console.log('HERE!!!!!!!!!!!!!!!!!!!');
//   const cart = [
//     {
//       name: "iPhone xs",
//       price: "1500"
//     },
//     {
//       name: "Google PixelBook",
//       price: "500"
//     }
//   ];

// //   var myData = [];
// //   const cart = [
// //   $.each(cart ,function (index) {
// //     var obj = { 
// //         id: $this.find('.elementOne').val(),
// //         name: $this.find('.elementTwo').text()
// //     };
// //     myData.push(obj);
// // })

// console.log(myData);
//   response.status(200).json({
//     message: 'Handling Order GET Requests'
//   });
// });

// router.post('/', (request, response, next) => {
//   response.status(201).json({
//     message: 'Handling Order POST Requests'
//   });
// });

// router.get('/:orderId', (request, response, next) => {
//   const id = request.params.orderId;
//   response.status(200).json({
//     message: 'Your order has been recieved',
//     id: id
//   });
// });

// router.delete('/:orderId', (request, response, next) => {
//   const id = request.params.orderId;
//   response.status(200).json({
//     message: 'Your order has been DELETED',
//     id: id
//   });
// });

router.post('/', (request, response, next) => {
  //create unique id for DB and parse body from the POST
  const order = new Order({
    _id: new mongoose.Types.ObjectId(),
    name: request.body.name,
    price: request.body.price

  });

  if(!(order.name && order.price)){
    response.status(500).json({
      message: 'Product was unable to be created, missing fields'
    });
  }

  
  //TODO add validation and return 400 if it fails
  console.log('PRICE', order.price);
  //save the incoming data
  order.save()
    .then(result => {
      //if success return 201 and object
      console.log("NEW PRODUCT", result);
      response.status(201).json({
        message: 'New order created',
        createdProduct: order
      });
    })
    .catch(error => {
      //catch 500 errors
      console.log(error)
      response.status(500).json({
        message: 'Order was unable to be created',
        error: error
      });
    });
});

router.get('/', (request, response, next) => {
  Order.find()
    .exec()
    .then(result => {
      if (result) {
        //if found and not null return 200
        console.log("MY RES", result);
        response.status(200).json({
          message: 'Oder was found',
          data: result
        });
      } else {
        //not found so return 404
        response.status(404).json({
          message: 'Order was not found'
        });
      }
    })
    .catch(error => {
      //catch 500 error
      console.log(error)
      response.status(500).json({
        message: 'Something went wrong',
        error: error
      });
    });
});

module.exports = router;
