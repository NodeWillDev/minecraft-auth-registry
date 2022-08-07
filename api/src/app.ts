import express from "express";
import cors from "cors";
import routes from "./router/routes";

class App {

  public express: express.Application

  constructor() {
    this.express = express();
    this.router(true)
  }

  public router(cors_activated: boolean) {
    if (cors_activated)
      this.express.use(cors());
    this.express.use(express.json());
    this.express.use(routes)
  }
}

export default new App().express