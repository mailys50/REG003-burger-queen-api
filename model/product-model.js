const mongoose = require('mongoose');
const Schema = mongoose.Schema

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: { Number, default: 0 },
      required: true,
    },
    image: {
      type: String,
      required: false,

    },
    type: {
      type: String,
      required: false,
    },
    dateEntry: {
      type: Date,
      default: Date.now(),
      required: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },

);

//productSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Product', productSchema);
