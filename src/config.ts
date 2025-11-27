import dotenv from "dotenv";
import path from "path";
import { SystemEnvironment } from "./types/system/SystemEnvironment";

const envPath = path.join(import.meta.dirname, "../.env");

dotenv.config({ path: envPath });

export type ServerConfig = {
  env: SystemEnvironment;
  port: number;
  uri: string;
};

const port = Number.parseInt(process.env.PORT ?? "5000");

const config = {
  env: process.env.NODE_ENV,
  port,
  uri: `http://localhost:${port}`,
} as ServerConfig;

export default config as Readonly<ServerConfig>;
