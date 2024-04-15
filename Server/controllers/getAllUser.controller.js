import User from "../models/user.model.js";

export const getAllUsers = async (req, res) => {
  try {
    const loggedInUser = req.user?._id;

    const users = await User.find({ _id: { $ne: loggedInUser } }).select(
      "-password"
    );
    res.status(200).send(users);
  } catch (error) {
    console.error("Error in getUsersForSidebar: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
