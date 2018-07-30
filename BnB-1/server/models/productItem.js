const mongoose = require ('mongoose');

const ProductItemSchema = new mongoose.Schema ({
  name : {
    type: String,
    default: ''
  },
  productId : {
    type: Number,
    default: '',
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
  },
  imageLink : {
    type: String,
    default: []
  },
  lastUpdated : {
    type: Date,
    default: Date.now
  }
});

// Auto increment solution currently not working
// ProductItemSchema.pre('save', function(next) {
//     var doc = this;
//     counter.findByIdAndUpdate({_id: 'productId'}, {$inc: { seq: 1} }, function(error, counter)   {
//         if(error)
//             return next(error);
//         doc.testvalue = counter.seq;
//         next();
//     });
// });

module.exports = mongoose.model('ProductItem',ProductItemSchema);
