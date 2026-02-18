import "reflect-metadata";
import { App } from "./app";

async function bootstrap() {
  const app = new App();
  await app.init();

  const port = Number(process.env.PORT ?? 4000);
  app.getApp().listen(port, () => {
    console.log(`🚀 http://localhost:${port}/graphql`);
  });
}

bootstrap();
