const helloUser = (request) => {
	return request.params.name
		? `Hello ${request.params.name}`
		: `Hello stranger!!`;
};

const createUser = async (userData, db) => {
	const user = {
		name: userData.name,
		email: userData.email
	};
	const res = await db.collection('users').insertOne(user);
	return {
		message: 'User created successfully',
		userId: res.insertedId,
		name: res.name,
		email: res.email
	};
};

export { helloUser, createUser };
