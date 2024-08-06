import { helloRoute } from "../routes/helloRoute.js";

const helloPlugin = {
  name: "helloPlugin",
  register: async (server, options) => {
    server.route(helloRoute);
  },
};

export { helloPlugin };
