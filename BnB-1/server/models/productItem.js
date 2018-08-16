const mongoose = require ('mongoose');
const autoIncrement = require ('mongoose-auto-increment');
// import {MongooseAutoIncrementID} from 'mongoose-auto-increment-reworked';
var connection = mongoose.createConnection("mongodb://localhost:27017/db_bnb_1");

autoIncrement.initialize(connection);
const ProductItemSchema = new mongoose.Schema ({
  name : {
    type: String,
    default: '',
    required: true
  },
  productId : {
    type: Number,
    default: ''
  },
  description : {
    type: String,
    default: 'N/A',
    required: true
  },
  category: {
    type:String,
    default: 'all'
  },
  price : {
    type: Number,
    default: 0,
    required: true
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

ProductItemSchema.plugin(autoIncrement.plugin,{model:'ProductItem',field:'productId',startAt:1});
// MongooseAutoIncrementID.initialise('productIncrement');
// const options ={field: 'productId'};
//
// const plugin = new MongooseAutoIncrementID(ProductItemSchema, 'ProductItem',options);
//
// plugin.applyPlugin()
//   .then(inc => console.log("auto inc done"+inc))
//   .catch(err => console.log('auto inc fail'+err));
//
// ProductItemSchema.plugin(MongooseAutoIncrementID.plugin, {modelName: 'ProductItem'});

// new MongooseAutoIncrementID(MySchema, 'MyModel', options);

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
