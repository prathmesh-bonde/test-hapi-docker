import { userRoutes } from '../routes/index.js';

const userPlugin = {
	name: 'userPlugin',
	register: async (server, options) => {
		server.route(userRoutes);
	}
};

export default userPlugin;
