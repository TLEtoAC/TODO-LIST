import express from "express";
import userRouter from "./server/routes/userRoutes.js";
import authRouter from "./server/routes/authRoutes.js"
import cors from "cors";
const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"], // Added Vite's default port
    credentials: true,
  })
);
// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Debug middleware to log all requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  next();
});

app.use("/", authRouter);
app.use("/", userRouter);




app.listen(5000, (err) => {
    console.log(err);
    console.log("server started on port 5000");
});