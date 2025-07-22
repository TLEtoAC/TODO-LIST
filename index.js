import express from "express";
import router from "./server/routes/userRoutes";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(5000, (err) => {
    console.log(err);
    console.log("server started on port 5000");
});