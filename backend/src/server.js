import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

//middleware
app.use(express.json()); //this middleware will parse json bodies: req.body
app.use(rateLimiter);

//our simple custom middleware
/*app.use((req, res, next) => {
  console.log(`req method is ${req.method} and req Url is ${req.url}`);
  next();
});*/

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("server started on PORT:", PORT);
  });
});
