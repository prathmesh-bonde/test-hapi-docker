import Boom from '@hapi/boom';

const BadRequestError = (request, h, err) => {
	const message = `Bad Request: ${
		err.details ? err.details[0].message : 'Invalid request'
	}`;

	return Boom.badRequest(message);
};

export { BadRequestError };
