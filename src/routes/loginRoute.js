import { loginHandler } from '../controllers/index.js';
import { BadRequestError } from '../errors/index.js';
import { loginValidation } from '../validations/index.js';

const loginRoute = [
	{
		method: 'POST',
		path: '/login',
		handler: loginHandler,
		options: {
			validate: {
				payload: loginValidation.payload,
				failAction: BadRequestError
			}
		}
	}
];

export default loginRoute;
