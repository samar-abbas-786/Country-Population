const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
  country: {
    type: String,
    require: true,
  },
});
