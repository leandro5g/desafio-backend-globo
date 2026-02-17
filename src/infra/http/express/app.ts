import express from "express";

class App {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.routes();
  }

  private routes() {
    this.app.get("/", (req, res) => {
      res.send("Hello World!");
    });
  }

  public getApp() {
    return this.app;
  }
}

export const app = new App();
