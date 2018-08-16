const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt=require('jsonwebtoken');
// // Load user models
const User = require('../../models/User');
const Cart = require('../../models/Cart');
const keys = require('../../../config/config');
// Validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.get('/test',(req,res)=> { res.json({message: 'Users Works!'});

});

// API - Create User - No Token
router.post('/register', (req,res) => {
  const {errors,isValid} = validateRegisterInput(req.body);
  if(!isValid){
    return res.status(400).json(errors);
  }
  // else {
  //   return res.json({message:"Succes"});
  // }

  User.findOne({email:req.body.email})
    .then(user => {
      if(user) {
        res.status(400).json({email:'User already exists'});
      }
      else {
        const newUser = new User({
          name:req.body.name,
          email:req.body.email,
          phone:req.body.phone,
          password:req.body.password,
        });
        bcrypt.genSalt(10,(err,salt)=> {
          bcrypt.hash(newUser.password,salt, (err,hash) => {
            newUser.password=hash;
            newUser.save()
              .then(user=> {
                // Create Cart
                const newCart = new Cart({
                  user:user._id
                });
                newCart.save();
                res.json(user);
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
});

// API - Login User - No Token
router.post('/login', (req,res) => {
  const {errors,isValid} = validateLoginInput(req.body);
  if(!isValid){
    return res.status(400).json(errors);
  }
  User.findOne({email:req.body.email})
    .then(user => {
      if(!user) {
        errors.email = "User not found";
        return res.status(400).json(errors);
      }
      bcrypt.compare(req.body.password,user.password)
        .then(isMatch => {
          if(isMatch) {
            // console.log('matched');
            // Setting up JWT and Passport on successful Login
            const payload = {id:user.id,name:user.name};
            jwt.sign(payload,keys.secretOrKey,{expiresIn: 3600}, (err,token) => {
              res.json ({
                success: true,
                token: 'Bearer ' + token
              });
            })
          } else {
            errors.password = "Password is incorrect";
            return res.status(400).json(errors);
          }
        });
    })
});

// API - Check User - Token
router.get('/current',passport.authenticate('jwt',{session:false}), (req,res) => {
  res.json({
    id:req.user.id,
    name:req.user.name,
    email:req.user.email
  });
});

module.exports = router;
