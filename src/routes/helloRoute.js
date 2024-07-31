import { helloHandler } from '../controllers/index.js';

const helloRoute = [
	{
		method: 'GET',
		path: '/',
		handler: helloHandler
	}
];

export default helloRoute;
