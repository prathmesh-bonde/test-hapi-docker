import { userHandler } from '../controllers/index.js';
import { userValidation } from '../validations/index.js';

const userRoute = [
	{
		method: 'GET',
		path: '/user/{name?}',
		handler: userHandler,
		options: {
			validate: userValidation
		}
	}
];

export default userRoute;
