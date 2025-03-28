import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import router from "./route/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.all("/*", (req, res) => {
  res.status(404).send({
    message: `Given ${req.url} with method: ${req.method} not found`,
  });
});

const PORT = process.env.PORT || 3000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection error:", err));

export default app;
