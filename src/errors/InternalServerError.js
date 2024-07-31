import { Boom } from '@hapi/boom';

const InternalServerError = (request, h, err) => {
	const message = 'Internal Server Error';
	throw Boom.internal(message);
};

export { InternalServerError };
