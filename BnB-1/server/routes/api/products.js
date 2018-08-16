const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');


const validateProductInput = require('../../validation/addProduct');
const ProductItem = require('../../models/productItem');
// const passport = require('passport');
//
// const ProductItem = require('../../models/productItem');

router.get('/test',(req,res) => {
  res.json({message: 'Products works'});
});

// add new product
router.post('/add',passport.authenticate('jwt',{session:false}),(req,res)=> {
  const {errors,isValid} = validateProductInput(req.body);
  if(!isValid) {
    return res.status(400).json(errors);
  }

  ProductItem.findOne({name:req.body.name})
    .then(product => {
      if(product) {
        return res.status(400).json({name:'Product Already Exists!'});
      }
      else {
        const newProduct = new ProductItem({
          name: req.body.name,
          description: req.body.description,
          category: req.body.category,
          price: req.body.price,
          quantity: req.body.quantity,
        });

        newProduct.save()
          .then(product => res.json(product))
          .catch(err => console.log(err));
      }

    })
    .catch(err => console.log(err));

  }); // End of Add Product

  // update existing product
  // add passport
  router.post('/update',passport.authenticate('jwt',{session:false}),(req,res)=> {
    const {errors,isValid} = validateProductInput(req.body);
    if(!isValid) {
      return res.status(400).json(errors);
    }
    const productItemFields ={};
    productItemFields.id=req.body.product_id;
    if(req.body.name) productItemFields.name=req.body.name;
    if(req.body.description) productItemFields.description = req.body.description;
    if(req.body.category) productItemFields.category = req.body.category;
    if(req.body.price) productItemFields.price = req.body.price;
    if(req.body.quantity) productItemFields.quantity = req.body.quantity;

    ProductItem.findOne({_id:productItemFields.id})
      .then(product => {
        if(product) {
          ProductItem.findByIdAndUpdate({_id:productItemFields.id},{$set:productItemFields},{new:true})
            .then(product => res.json(product));
        }
      })
      .catch(err => console.log(err));
    }); // End of update Product

    // Delete product
    router.delete('/delete',passport.authenticate('jwt',{session:false}),(req,res) => {
      ProductItem.findOne({_id:req.body.product_id})
        .then(product => {
          if(product) {
            ProductItem.remove({_id:req.body.product_id})
              .then(product => res.json({message:'Product is deleted'}))
          } else {
            return res.status(400).json({message: 'Product does not exist'});
          }
        })
        .catch(err => console.log(err));
    }) // End of Delete Product

module.exports = router;

//
// module.exports = () => {
//
//   // get details of all product
//   app.get('/viewAll', (req,res,next) => {
//     ProductItem.find()
//     .exec()
//     .then(result => res.json(result))
//     .catch((err) => {return res.send({
//       success:false,
//       message: 'Error: Server Error!'
//     });
//   })
//   });
//
//   // add new product
//   app.post('/api/products/add',(req,res,next)=> {
//     const {body} = req;
//     const {name} = body;
//     const {description} = body;
//     const {quantity} = body;
//     const {price} = body;
//
//     // Check for required values, not defined yet in schema
//     if(!name) {
//       return res.send({
//         success: false,
//         message: 'Error: Product Name is required'
//       });
//     }
//     if(!description) {
//       return res.send({
//         success: false,
//         message: 'Error: Product Description is required'
//       });
//     }
//
//     ProductItem.find ({
//       name: name
//     }, (err,previousProduct) => {
//       if(err) {
//         return res.send({
//           success: false,
//           message: 'Change: Error: Could not search for Product'
//         });
//       } else if (previousProduct.length>0) {
//         return res.send({
//           success: false,
//           message: 'Error: Product already exists'
//         });
//       }
//       // if no server error and product does not exist previuosly add it to db
//
//       const newProduct = new ProductItem();
//       newProduct.name=name;
//       // newProduct.productId= getNextSequenceValue("productId");
//       newProduct.description=description;
//       newProduct.price=price;
//       newProduct.quantity=quantity;
//
//       newProduct.save((err,Product) => {
//         if(err) {
//           return res.send({
//             success: false,
//             message: 'Change: Error: Cannot add product'+err
//           });
//         }
//         return res.send({
//           success: true,
//           message: 'Product added successfully'
//         })
//       });
//
//     });
//
//   }); // End of Add Product
//
// }
