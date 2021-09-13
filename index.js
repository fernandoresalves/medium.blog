import express from "express";
import cors from "cors";
import logger from "./logger.js";
import postRouter from "./routes/post.route.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/posts", postRouter);
app.use("/", (req, res) => {
  res.send("Opa!");
});

app.use((error, req, res, next) => {
  logger.error(`${req.method} - ${req.baseUrl} - ${error.message}`);
  res.status(400).send({ error: error.message });
});

app.listen(3000, () => console.log("⚡️ API started!"));
