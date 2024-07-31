import { helloUser } from '../services/index.js';

const userHandler = async (request, h) => {
	return helloUser(request);
};

export { userHandler };
