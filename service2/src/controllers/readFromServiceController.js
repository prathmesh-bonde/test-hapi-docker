import { readFromService } from '../services/readFromService.js';

const readFromServiceHandler = async (request, h) => {
	try {
		const url = process.env.SERVICE_URL;
		const options = {
			payload: request.payload,
			headers: {
				'Content-Type': 'application/json'
			}
		};

		console.log('hitting -- ');
		const { response, statusCode } = await readFromService(url, options);
		console.log('response -- ', response);
		return h.response(response).code(statusCode);
	} catch (error) {
		throw new Error(error);
	}
};

export { readFromServiceHandler };
