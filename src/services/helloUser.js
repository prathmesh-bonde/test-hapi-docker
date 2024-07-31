const helloUser = (request) => {
	return request.params.name
		? `Hello ${request.params.name}`
		: `Hello stranger!!`;
};

export { helloUser };
