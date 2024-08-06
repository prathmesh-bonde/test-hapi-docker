import { readFromService } from '../services/readFromService.js';

const readFromServiceHandler = async (request, h) => {
	try {
		const url = 'http://localhost:3000/user';
		const options = {
			payload: request.payload,
			headers: {
				'Content-Type': 'application/json'
			}
		};

		const { response, statusCode } = await readFromService(url, options);
		return h.response(response).code(statusCode);
	} catch (error) {
		throw new Error(error);
	}
};

export { readFromServiceHandler };
