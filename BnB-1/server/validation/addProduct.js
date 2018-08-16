const validator =require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateProductInput (data)
{
  let errors= {};

  data.name= !isEmpty(data.name)?data.name:'';
  data.description = !isEmpty(data.description)?data.description:'';
  data.price=!isEmpty(data.price)?data.price:'';
  data.quantity=!isEmpty(data.quantity)?data.quantity:'';

  if(validator.isEmpty(data.name)){
    errors.name = "Proudct Name is required!";
  }
  if(validator.isEmpty(data.description)) {
    errors.description = "Product description is required!";
  }
  if(!validator.isNumeric(data.price)) {
    errors.price = "Product Price should be a Number!";
  }
  if(validator.isEmpty(data.price)) {
    errors.price = "Product Price is required!";
  }

  if(!validator.isEmpty(data.quantity)) {
    if(!validator.isNumeric(data.quantity)) {
      errors.quantity = "Product Quantity should be a Number!";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
