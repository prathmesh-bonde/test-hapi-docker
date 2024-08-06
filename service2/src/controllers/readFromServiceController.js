import { readFromService } from '../services/readFromService.js';

const readFromServiceHandler = (request, h) => {
	return readFromService(request);
};

export { readFromServiceHandler };
