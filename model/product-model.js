const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const productSchema = mongoose.Schema(
  {
    category: {
      type: String, enum: ['HAMBURGUESA', 'SHAWARMA', 'BEBIDA'],
    },
    name: {
      type: String,
      // required: true,
    },

    price: {
      type: { Number, default: 0 },
      required: true,
    },
    images: {
      type: String,
      required: false,
      default: 'burger1.jpg',
    },

    dateEntry: {
      type: Date,
      default: Date.now(),
      required: false,
    },
  },
  {
    versionKey: false,
  },
);

productSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Product', productSchema);
