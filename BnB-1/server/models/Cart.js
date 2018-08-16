const mongoose = require('mongoose');
const Schema =mongoose.Schema;

const CartSchema = new Schema ({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  items: [{
    product_id: {
      type: Schema.Types.ObjectId,
      ref: 'ProductItem'
    },
    name: {
      type: String,
      default: ''
    },
    quantity: {
      type: Number,
      default: 0
    },
    price: {
      type: Number,
      default: 0
    }
  }],
  totalPrice: {
    type: Number,
    default: 0
  },
  totalQuantity: {
    type: Number,
    default: 0
  }
});


module.exports = mongoose.model('cart',CartSchema);
