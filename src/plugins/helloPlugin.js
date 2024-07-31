import { helloRoute } from '../routes/index.js';

const helloPlugin = {
	name: 'helloPlugin',
	register: async (server, options) => {
		server.route(helloRoute);
	}
};

export default helloPlugin;
