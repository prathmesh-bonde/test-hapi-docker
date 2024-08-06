import {
	findMovieHandler,
	findMoviesHandler
} from '../controllers/dbController.js';

const dbRoutes = [
	{
		method: 'GET',
		path: '/movies',
		handler: findMoviesHandler
	},
	{
		method: 'GET',
		path: '/movies/{id}',
		handler: findMovieHandler
	}
];

export { dbRoutes };
