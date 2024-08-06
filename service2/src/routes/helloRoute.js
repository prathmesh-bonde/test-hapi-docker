import { helloController } from "../controllers/helloController.js";

const helloRoute = [
  {
    method: "GET",
    path: "/",
    handler: helloController,
  },
];

export { helloRoute };
