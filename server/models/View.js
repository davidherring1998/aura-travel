const mongoose = require("mongoose");

const { Schema } = mongoose;
const User = require("./User");

const viewSchema = new Schema({
  viewText: {
    type: String,
    // required: true,
    minlength: 1,
    maxLength: 300,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  userName: [User.schema],
});

const View = mongoose.model("View", viewSchema);

module.exports = View;
