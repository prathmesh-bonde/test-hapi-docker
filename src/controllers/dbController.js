import { dbService } from '../services/index.js';

const findMoviesHandler = (request, h) => {
	return dbService.findAllService(request, h);
};

const findMovieHandler = (request, h) => {
	return dbService.findOneService(request, h);
};

const addMovieHandler = (request, h) => {
	return dbService.addOneService(request);
};

const deleteMovieHandler = (request, h) => {
	return dbService.deleteOneService(request);
};

const updateMovieHandler = (request, h) => {
	return dbService.updateOneService(request);
};

export {
	findMoviesHandler,
	findMovieHandler,
	addMovieHandler,
	deleteMovieHandler,
	updateMovieHandler
};
