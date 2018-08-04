const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// const passport = require('passport');
//
// const ProductItem = require('../../models/productItem');



const ProductItem = require('../../models/productItem');

router.get('/test',(req,res) => {
  res.json({message: 'Products works'});
});

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
