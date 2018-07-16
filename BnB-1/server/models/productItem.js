const mongoose = require ('mongoose');

const ProductItemSchema = new mongoose.Schema ({
  name : {
    type: String,
    default: ''
  },
  description : {
    type: String,
    default: ''
  },
  price : {
    type: Number,
    default: ''
  },
  quantity : {
    type: Number,
    default:''
  }

});

module.exports = mongoose.model('ProductItem',ProductItemSchema);
