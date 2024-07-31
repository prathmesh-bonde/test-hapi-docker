import Joi from 'joi';

const userValidation = {
	params: Joi.object({
		name: Joi.string().alphanum().allow('').optional().messages({
			'string.base': 'Name should contain letters or numbers only',
			'string.empty': 'Name is optional or can be empty'
		})
	})
};

export { userValidation };
