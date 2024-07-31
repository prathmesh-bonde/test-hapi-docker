import { userRoute } from '../routes/index.js';

const userPlugin = {
	name: 'userPlugin',
	register: async (server, options) => {
		server.route(userRoute);
	}
};

export default userPlugin;
