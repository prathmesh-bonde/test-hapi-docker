import { dbRoutes } from '../routes/db_crud.js';

const dbPlugin = {
	name: 'dbPlugin',
	register: async (server, options) => {
		server.route(dbRoutes);
	}
};

export { dbPlugin };
