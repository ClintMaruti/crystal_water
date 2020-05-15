const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Client Schema
const clientSchema = new Schema({
  name: {
    type: String,
    required: "{PATH} is required",
  },
  id_number: {
    type: Number,
    required: "{PATH} is required",
  },
  phone_number: {
    type: Number,
    required: "{PATH} is required",
  },
  meter_no: {
    type: Number,
    ref: "Meter",
  },
  previous_reading:  {
    type: Number,
    required: "{PATH} is required",
  },
  current_reading: {
    type: Number,
    required: "{PATH} is required",
  },
  units: {
    type: Number,
    required: "{PATH} is required",
  },
  date: {
    type: Date,
  },
});

module.exports = Client = mongoose.model("Client", clientSchema);
