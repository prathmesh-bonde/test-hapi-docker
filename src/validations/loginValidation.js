import Joi from 'joi';

const loginValidation = {
	payload: Joi.object({
		username: Joi.string().alphanum().required().min(3).max(30).messages({
			'string.base': 'Username should contain letters or numbers only',
			'string.min': 'Username should be of minimum length 3',
			'string.max': 'Username should be of maximum length 30',
			'any.required': 'Username is required'
		}),
		password: Joi.string()
			.pattern(new RegExp('^[a-zA-Z0-9@]{6,30}$'))
			.required()
			.min(6)
			.messages({
				'string.base': "Password should contain letters or numbers or '@'",
				'string.min': 'Password should be of minimum length 6',
				'string.max': 'Password should be of maximum length 30',
				'any.required': 'Password is required'
			})
	})
};

export { loginValidation };
