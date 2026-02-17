import { app } from "./app";

const application = app.getApp();

application.listen(3000, () => {
  console.log("Server is running on port 3000");
});