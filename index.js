//imported express - allows us to create a server
import express from "express";

//imported routes so we could tell the server to use this specific router
import listRouter from "./routes/list.js";

import cors from "cors";

//storing express functions within a variable
const app = express();

app.use(cors());
app.use(express.json());

//port which the server will be listening on
const PORT = 3001;

//specifying a url '/list', telling server to use that specific router
app.use("/list", listRouter);

//this function is using a get method. when a user hits the '/' url we respond with a stringyfied payload and status
app.get("/", (req, res) => {
  res.json({ success: "true", payload: "Welcome to the backend!" });
});

//allows us to know the server is listening on port 3001 with below message in terminal
app.listen(PORT, () => {
  //this is for our confirmation that the server is listening on port 3001
  console.log(`Listening on ${PORT}`);
});
