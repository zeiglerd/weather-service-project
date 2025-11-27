import express, { NextFunction, Request, Response } from "express";
import * as OpenApiValidator from "express-openapi-validator";
import path from "path";
import config from "./config.js";

const { port, uri } = config;

const app = express();

app.set("trust proxy", 3);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apiSpec = path.join(import.meta.dirname, "openapi/openapi.yaml");

app.use("/api-docs", express.static(apiSpec));

app.use(
  OpenApiValidator.middleware({
    apiSpec,
    operationHandlers: path.join(import.meta.dirname, "handlers"),
    validateRequests: true,
    validateResponses: true,
  })
);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors,
  });
});

app.listen(port, () => {
  console.log(`🚀 Server running on ${uri}`);
  console.log(`📝 API Docs: ${uri}/api-docs`);
});
