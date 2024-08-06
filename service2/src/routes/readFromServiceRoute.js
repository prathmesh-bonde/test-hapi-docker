import { readFromServiceHandler } from '../controllers/readFromServiceController.js';

const readFromServiceRoute = [
	{
		method: 'POST',
		path: '/readFromService',
		handler: readFromServiceHandler
	}
];

export { readFromServiceRoute };
