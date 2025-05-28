import express from "express";
import dotenv from "dotenv";

import authRoutes from "./Routes/auth.route.js";

import {connectDB} from "./lib/db.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT;

//  app.get("/api/auth/signup", (req, res) => {
//   res.send("Signup Route");
//  });

//  app.get("/api/auth/login", (req, res) => {
//   res.send("Login Route");
//  });

//  app.get("/api/auth/logout", (req, res) => {
//   res.send("Logout Route");
//  });
//will reate the route parts seperately to avoid the mess

app.use("/api/auth", authRoutes); //as the above route has these path similar

app.listen(PORT, () => {
  console.log(`Server is running on port 5001 ${PORT}`);

  connectDB();

});
