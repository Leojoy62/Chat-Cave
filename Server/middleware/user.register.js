import { check } from "express-validator";

export const userValidator = [
  check("fullname").trim().notEmpty().withMessage("Fullname is required"),
  check("username").trim().notEmpty().withMessage("Username is required"),
  check("email").trim().notEmpty().isEmail().withMessage("Enter a valid email"),
  check("password")
    .trim()
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage("Password must be atleast 6 characters long"),
  check("confirmpassword")
    .trim()
    .notEmpty()
    .withMessage("Confirm password is required"),
  check("gender").trim().notEmpty().withMessage("Gender is required"),
];
