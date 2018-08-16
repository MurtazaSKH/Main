const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');


const Cart = require('../../models/Cart');
const ProductItem = require('../../models/productItem');

router.get('/test',(req,res) => {
  return res.json({message: 'Cart working'});
});

// Add one product item to cart
router.post('/add',(req,res) => {

  Cart.findOne({user:req.body.user_id,'items.product_id':req.body.product_id})
    .then(cart => {
      if(cart) {
        // if item exists
        for(i=0;i<cart.items.length;i++) {
          if(cart.items[i].product_id==req.body.product_id) {
            cart.items[i].quantity+=1;
            cart.totalPrice+=cart.items[i].price;
            cart.totalQuantity+=1;
            cart.save().then(cart => res.json(cart));
          }
        }
      } else {
        // Add item to cart
        ProductItem.findOne({_id:req.body.product_id})
          .then(product => {
            if(product) {
              Cart.findOne({user:req.body.user_id})
                .then(cart => {
                  if(cart) {
                    // console.log("adding new product");
                    const newItem = {
                       product_id: product._id,
                       name: product.name,
                       quantity:1,
                       price:product.price
                     }
                     cart.items.push(newItem);
                     cart.totalPrice+=newItem.price;
                     cart.totalQuantity+=1;
                     cart.save().then(cart => res.json(cart));
                  }
                })
                .catch(err => console.log(err));
            } else {
              return res.status(400).json({error:'Product not found.'});
            }
          })
          .catch(err => console.log(err));

      }
    })
    .catch(err => console.log(err));
});

// Remove one item from cart
router.post('/remove',(req,res) => {

  Cart.findOne({user:req.body.user_id,'items.product_id':req.body.product_id})
    .then(cart => {
      if(cart) {
        // if item exists
        for(i=0;i<cart.items.length;i++) {
          if(cart.items[i].product_id==req.body.product_id) {
            if(cart.items[i].quantity>1) {
              cart.items[i].quantity-=1;
              cart.totalPrice-=cart.items[i].price;
              cart.totalQuantity-=1;
            }
            else {

              cart.totalQuantity-=1;
              cart.totalPrice-=cart.items[i].price;
              cart.items.pull(cart.items[i]._id);
            }

            cart.save().then(cart => res.json(cart));
          }
        }
      } else {
        return res.status(400).json({error:'Product not found.'});

      }
    })
    .catch(err => console.log(err));
});

// Get All Cart items for initial load
// Update according to a specific user
router.get('/all',(req,res) => {

  Cart.find()
    .then(cartItems => res.json(cartItems))
    .catch(err => console.log(err));
});


module.exports = router;
