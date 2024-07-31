import { Boom } from '@hapi/boom';

const UnauthorizedError = (request, h, err) => {
	const message = 'Invalid username or password';
	throw Boom.unauthorized(message);
};

export { UnauthorizedError };
