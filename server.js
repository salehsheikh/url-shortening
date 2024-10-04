import express from "express";
const app = express();
const Port = 5000;
import indexRouter from "./routes/index.js";
import urlsRouter from "./routes/urls.js";
import connectDB from "./config/db.js";
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use(express.json());

app.use("/shorten", urlsRouter);
app.use("/", indexRouter);
app.listen(Port, () => {
  connectDB();
  console.log(`Server is running on port ${Port}`);
});
