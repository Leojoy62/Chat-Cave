import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import generateJWTokenAndSetCookie from "../utils/generatejwtoken.js";

export const resgiterUser = async (req, res) => {
  try {
    const {
      fullname,
      username,
      email,
      password,
      confirmpassword,
      profilepic,
      gender,
    } = req.body;
    if (
      !fullname ||
      !username ||
      !email ||
      !password ||
      !confirmpassword ||
      !gender
    ) {
      return res.status(400).json({ error: "Please fill all the fields" });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }
    if (password !== confirmpassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    //avater profilepic
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    const newUser = new User({
      fullname,
      username,
      email,
      password: hashedPassword,
      confirmpassword: hashedPassword,
      gender,
      profilepic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      generateJWTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      res.status(201).json(newUser);
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: "Please fill all the fields" });
    }
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: "User does not exist" });
    }
    const isMatch = await bcrypt.compare(password, user?.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }
    generateJWTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullname: user.fullname,
      username: user.username,
      profilepic: user.profilepic,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const logoutUser = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
