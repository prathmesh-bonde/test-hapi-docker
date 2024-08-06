import { userHandler } from '../controllers/index.js';
import { BadRequestError } from '../errors/index.js';
import { userValidation } from '../validations/index.js';

const userRoutes = [
	{
		method: 'GET',
		path: '/user/{name?}',
		handler: userHandler.helloUser,
		options: {
			validate: {
				params: userValidation.params
			}
		}
	},
	{
		method: 'POST',
		path: '/user',
		handler: userHandler.createUser,
		options: {
			validate: {
				payload: userValidation.payload,
				failAction: BadRequestError
			}
		}
	}
];

export default userRoutes;
