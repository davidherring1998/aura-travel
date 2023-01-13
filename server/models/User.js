const mongoose = require("mongoose");

const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxLength: 16,
  },
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const lightBeams = 12;
    this.password = await bcrypt.hash(this.password, lightBeams);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
