import { InternalServerError } from '../errors/InternalServerError.js';
import { userService } from '../services/index.js';

const helloUser = async (request, h) => {
	return userService.helloUser(request);
};

const createUser = async (request, h) => {
	try {
		const db = request.mongo.db;
		const userData = request.payload;
		const newUser = await userService.createUser(userData, db);
		console.log(newUser.message);
		return h.response(newUser).code(201);
	} catch (error) {
		throw new InternalServerError();
	}
};

export { helloUser, createUser };
