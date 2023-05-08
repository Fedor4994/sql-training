import express, { ErrorRequestHandler, Application } from "express";
import logger from "morgan";
import cors from "cors";
import * as dotenv from "dotenv";
import { ErrorWithStatus } from "./types/error.js";
import { createProductsRouter } from "./routes/productsRouter.js";

dotenv.config();

const app: Application = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

function addApiRoutes() {
  const router = express.Router();

  router.use("/products", createProductsRouter());

  return router;
}

app.use("/api", addApiRoutes());

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use(((err: ErrorWithStatus, req, res, next) => {
  const { status = 500, message = "Server error" } = err;

  res.status(status).json({ message });
}) as ErrorRequestHandler);

export default app;
