import { helloService } from "../services/helloService.js";

const helloController = (request, h) => {
  return helloService();
};

export { helloController };
