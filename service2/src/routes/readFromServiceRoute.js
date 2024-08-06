import { readFromServiceHandler } from '../controllers/readFromServiceController.js';

const readFromServiceRoute = [
	{
		method: 'GET',
		path: '/readFromService',
		handler: readFromServiceHandler
	}
];

export { readFromServiceRoute };
