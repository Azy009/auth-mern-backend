const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true,"email is Required"],
      unique: [true,"already in database"],
    },
    mobile: {
      type: String,
      required: [true,"mobile is Required"],
      unique: [true,"already in database"],
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


const Usertable = mongoose.model("Usertable", userSchema);
module.exports = Usertable;
