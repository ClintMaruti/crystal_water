const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const meterSchema = new Schema({
  meter_no: {
    type: Number,
    required: "{PATH} is required",
  },
  previous_reading: {
    type: Number,
    required: "{PATH} is required",
  },
  current_reading: {
    type: Number,
    required: "{PATH} is required",
  },
  client: {
    type: Schema.Types.ObjectId,
    ref: "Client",
  },
  date: {
    type: Date,
  }
});

module.exports = Meter = mongoose.model("Meter", meterSchema);
