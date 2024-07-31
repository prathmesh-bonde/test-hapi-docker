import { loginUser } from '../services/index.js';

const loginHandler = async (request, h) => {
	const result = loginUser(request);

	const statusCode = result === 'Login successful!' ? 200 : 401;

	return h.response({ message: result }).code(statusCode);
};

export { loginHandler };
