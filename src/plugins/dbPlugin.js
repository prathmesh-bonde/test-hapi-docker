import { dbRoutes } from '../routes/index.js';

const dbPlugin = {
	name: 'dbPlugin',
	register: async (server, options) => {
		server.route([
			...dbRoutes.getAllMovies,
			...dbRoutes.findOneMovie,
			...dbRoutes.addMovie,
			...dbRoutes.deleteMovie,
			...dbRoutes.updateMovie
		]);
		// server.route(dbRoutes);
	}
};

export default dbPlugin;
