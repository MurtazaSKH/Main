const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateRegisterInput (data) {
  let errors = {};
  data.name = !isEmpty(data.name)?data.name:'';
  data.email = !isEmpty(data.email)?data.email:'';
  data.password = !isEmpty(data.password)?data.password:'';
  data.password2 = !isEmpty(data.password2)?data.password2:'';
  data.phone = !isEmpty(data.phone)?data.phone:'';

  if(!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  if(validator.isEmpty(data.email)) {
    errors.email = "Email is Required";
  }
  if(validator.isEmpty(data.name)) {
    errors.name = "Name is Required";
  }
  if(!validator.isLength(data.password,{min:6,max:20})) {
    errors.password = "Password must be between 6 and 20 characters";
  }
  if(validator.isEmpty(data.password)) {
    errors.password = "Password is Required";
  }
  if(!validator.equals(data.password,data.password2)) {
    errors.password2 = "Passwords must match";
  }
  if(validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm Password is Required";
  }
  if(validator.isNumeric(data.phone) && !validator.isLength(data.phone,{min:10,max:12})) {
    errors.phone = "Phone Number is Invalid";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
