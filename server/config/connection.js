const mongoose = require("mongoose");
mongoose.connect(
  mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://Aura-travlers:Travelers@arua-travelers.wxszlkl.mongodb.net/?retryWrites=true&w=majority', {
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
module.exports = mongoose.connection;
