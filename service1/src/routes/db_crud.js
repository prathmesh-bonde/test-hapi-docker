import { dbHandler } from '../controllers/index.js';

const getAllMovies = [
	{
		method: 'GET',
		path: '/movies',
		handler: dbHandler.findMoviesHandler
	}
];

const findOneMovie = [
	{
		method: 'GET',
		path: '/movies/{id}',
		handler: dbHandler.findMovieHandler
	}
];

const addMovie = [
	{
		method: 'POST',
		path: '/movies',
		handler: dbHandler.addMovieHandler
	}
];

const deleteMovie = [
	{
		method: 'DELETE',
		path: '/movies/{id}',
		handler: dbHandler.deleteMovieHandler
	}
];

const updateMovie = [
	{
		method: 'PUT',
		path: '/movies/{id}',
		handler: dbHandler.updateMovieHandler
	}
];

export { getAllMovies, findOneMovie, addMovie, deleteMovie, updateMovie };
