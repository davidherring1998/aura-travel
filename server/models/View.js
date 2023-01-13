const mongoose = require("mongoose");

const { Schema } = mongoose;
const Waves = require("./Waves");

const viewSchema = new Schema({
  viewText: {
    type: String,
    required: true,
    minlength: 1,
    maxLength: 300,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  wave: [
    {
      type: Schema.Types.ObjectId,
      ref: "Waves",
    },
  ],
});

const View = mongoose.model("View", viewSchema);

module.exports = View;
