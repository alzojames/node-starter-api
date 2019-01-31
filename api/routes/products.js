const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const mongoose = require('mongoose');

router.get('/', (request, response, next) => {
  Product.find()
    .exec()
    .then(result => {
      if (result) {
        //if found and not null return 200
        console.log("MY RES", result);
        response.status(200).json({
          message: 'Product was found',
          error: result
        });
      } else {
        //not found so return 404
        response.status(404).json({
          message: 'Product was not found'
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

router.post('/', (request, response, next) => {
  //create unique id for DB and parse body from the POST
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: request.body.name,
    price: request.body.price
  });
  //TODO add validation and return 400 if it fails

  //save the incoming data
  product.save()
    .then(result => {
      //if success return 201 and object
      console.log("NEW PRODUCT", result);
      response.status(201).json({
        message: 'New producted created',
        createdProduct: product
      });
    })
    .catch(error => {
      //catch 500 errors
      console.log(error)
      response.status(500).json({
        message: 'Product was unable to be created',
        error: error
      });
    });
});


router.get('/:productId', (request, response, next) => {
  //parse id from url
  const id = request.params.productId;
  Product.findById(id)
    .exec()
    .then(result => {
      if (result) {
        //if found and not null return 200
        console.log("MY RES", result);
        response.status(200).json({
          message: 'Product was found',
          error: result
        });
      } else {
        //not found so return 404
        response.status(404).json({
          message: 'Product was not found'
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


//TODO
router.patch('/:productId', (request, response, next) => {
  id = request.params.productId;

    const newProduct = new Product({
      name: request.body.name,
      price: request.body.price
    });
  Product.update({ _id: id }, { $set: newProduct})
    .exec()
    .then(result => {
      response.status(200).json({
        message: 'Product successfully updated',
        result: result
      });
    })
    .catch();
});

router.delete('/:productId', (request, response, next) => {
  id = request.params.productId;
  Product.remove({_id: id})
    .exec()
    .then(result => {
      response.status(200).json(
        {message: 'Product successfullf deleted',
        result: result
      });
    })
    .catch(err => {
      response.status(500).json({error: err});
    });
});


module.exports = router;
