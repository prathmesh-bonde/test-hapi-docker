import Joi from 'joi';
import config from 'config';

const validateEnv = () => {
	const envSchema = Joi.object({
		HOST: Joi.string().required(),
		PORT: Joi.number().required(),
		NODE_ENV: Joi.string().valid('development', 'production').required()
	}).unknown();

	const serverConfig = config.get('server');

	const { error } = envSchema.validate({
		HOST: serverConfig.HOST,
		PORT: serverConfig.PORT,
		NODE_ENV: process.env.NODE_ENV
	});

	if (error) {
		throw new Error(`Env validation error: ${error.message}`);
	}
};

export { validateEnv };
