export default class Config {
  static get port() {
    return process.env.PORT ?? 3000;
  }
  static get node_env() {
    return process.env.NODE_ENV ?? "development";
  }
  static get environment() {
    return Environment[this.node_env];
  }
}

const Environment = {
  development: {
    serverURL: `http://localhost:${Config.port}/`,
    dbURL: "mongodb://localhost:27017/mongo-dev",
  },
  production: {
    serverURL: `http://localhost:${Config.port}/`,
    dbURL: "mongodb://localhost:27017/mongo-prod",
  },
} as Record<string, { serverURL: string; dbURL: string }>;
