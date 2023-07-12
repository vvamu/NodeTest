const {mongoose, Schema} = require("mongoose")

const userSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  });

  userSchema.set("collection", "nadezhdas");
  const User = mongoose.model("User", userSchema);
  
  module.exports = {
    User
  }