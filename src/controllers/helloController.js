import { sayHello } from '../services/index.js';

const helloHandler = (request, h) => {
	return sayHello();
};

export { helloHandler };
