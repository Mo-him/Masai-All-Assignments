const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
    name: { type: "String", require: "true" },
    description: "String",
    category: { type: "String", require: "true" },
    price: { type: "Number", require: "true" },
    image: "String",
    quantity: { type: "Number", require: "true" },
    rating: "Number",
  },
  {
    timestamps: true,
  }
);

const RestaurantMenuItem = mongoose.model("Items", RestaurantSchema);
module.exports = RestaurantMenuItem;
