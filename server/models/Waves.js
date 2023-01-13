const mongoose = require("mongoose");

const { Schema } = mongoose;
// const User = require("./User");

const wavesSchema = new Schema({
  waveBody: {
    type: String,
    required: true,
    minlength: 1,
    maxLength: 300,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Waves = mongoose.model("Waves", wavesSchema);

module.exports = Waves;
