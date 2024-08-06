import { findAllService, findOneService } from "../services/dbService.js";

const findMoviesHandler = (request, h) => {
  return findAllService(request, h);
};

const findMovieHandler = (request, h) => {
  return findOneService(request, h);
};

export { findMoviesHandler, findMovieHandler };
