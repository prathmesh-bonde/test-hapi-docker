import { loginRoute } from '../routes/index.js';

const loginPlugin = {
	name: 'loginPlugin',
	register: async (server, options) => {
		server.route(loginRoute);
	}
};

export default loginPlugin;
