import Joi from 'joi';

const userValidation = {
	params: Joi.object({
		name: Joi.string().alphanum().allow('').optional().messages({
			'string.base': 'Name should contain letters or numbers only',
			'string.empty': 'Name is optional or can be empty'
		})
	}),
	payload: Joi.object({
		name: Joi.string().required().messages({
			'string.base': 'Name should contain letters only',
			'string.empty': 'Name cannot be empty',
			'any.required': 'Name is required'
		}),
		email: Joi.string().email().required().messages({
			'string.base': 'Must be a valid email address',
			'string.empty': 'Email cannot be empty',
			'any.required': 'Email is required'
		})
	})
};

export { userValidation };
