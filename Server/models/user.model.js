import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmpassword: {
      type: String,
      required: true,
    },
    profilepic: {
      type: String,
      default: "",
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
