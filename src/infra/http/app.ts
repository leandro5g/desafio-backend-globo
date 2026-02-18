import "reflect-metadata";
import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import { buildSchema } from "type-graphql";
import { Container } from "typedi";
import path from "node:path";

import "../containers";
import { appResolvers } from "../graphql/resolvers";

export class App {
  private app: express.Application;

  constructor() {
    this.app = express();
  }

  public async init() {
    this.app.use(express.json());
    this.initializeRoutes();
    await this.initializeGraphql();
  }

  private async initializeGraphql() {
    const schema = await buildSchema({
      resolvers: appResolvers,
      validate: { forbidUnknownValues: false },
      container: Container,
      emitSchemaFile: path.resolve(__dirname, "schema.gql"),
    });

    const server = new ApolloServer({ schema });
    await server.start();

    this.app.use("/graphql", expressMiddleware(server));
  }

  private async initializeRoutes() {
    this.app.get("/health", (_req, res) => {
      res.status(200).json({ status: "ok" });
    });
  }

  public getApp(): express.Application {
    return this.app;
  }
}
