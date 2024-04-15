import "dotenv/config";
import path from "path";
import express from "express";

import cors from "cors";

import cookieParser from "cookie-parser";
import { connectDB } from "./db/db.js";
import authRoutes from "./routes/auth.routes.js";
import allUsers from "./routes/user.route.js";
import messages from "./routes/messages.route.js";
import { app, server } from "./socket/Socket.js";

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use(express.static(path.join(__dirname, "/Client/dist")));

app.use("/api/auth/", authRoutes);
app.use("/api/users/", allUsers);
app.use("/api/message/", messages);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "Client", "dist", "index.html"));
});
server.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});
