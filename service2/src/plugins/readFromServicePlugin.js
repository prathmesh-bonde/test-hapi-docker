import { readFromServiceRoute } from '../routes/readFromServiceRoute.js';

const readFromServicePlugin = {
	name: 'readFromServicePlugin',
	register: async (server, options) => {
		server.route(readFromServiceRoute);
	}
};

export { readFromServicePlugin };
