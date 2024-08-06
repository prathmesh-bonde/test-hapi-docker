import Wreck from '@hapi/wreck';

const readFromService = async (url, options) => {
	const { res, payload } = await Wreck.post(url, options);
	const response = JSON.parse(payload.toString());
	const statusCode = res.statusCode;
	console.log({ response, statusCode });
	return { response, statusCode };
};

export { readFromService };
