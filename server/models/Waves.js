const mongoose = require("mongoose");

const { Schema } = mongoose;
const User = require("./User");

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
  userName: [User.schema],
  view: {
    type: Schema.Types.ObjectId,
    ref: "View",
    required: true,
  },
});

const Waves = mongoose.model("Waves", wavesSchema);

module.exports = Waves;
