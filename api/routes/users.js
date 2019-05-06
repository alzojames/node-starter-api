const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');

router.post('/', (request, response, next) => {
    //create unique id for DB and parse body from the POST
    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      email: request.body.email,
      password: request.body.password
  
    });
  
    if(!(user.email && user.password)){
      response.status(500).json({
        message: 'User was unable to be created, missing fields'
      });
    }
  
    
    //TODO add validation and return 400 if it fails
    console.log('PRICE', user.email);
    //save the incoming data
    User.save()
      .then(result => {
        //if success return 201 and object
        console.log("NEW PRODUCT", result);
        response.status(201).json({
          message: 'New User created',
          createdProduct: user
        });
      })
      .catch(error => {
        //catch 500 errors
        console.log(error)
        response.status(500).json({
          message: 'User was unable to be created',
          error: error
        });
      });
  });
  