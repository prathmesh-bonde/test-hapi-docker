const findAllService = async (request) => {
	const movies = await request.mongo.db
		.collection('movies')
		.find({})
		.limit(20)
		.toArray();

	return movies;
};

const findOneService = async (request) => {
	const movie = await request.mongo.db.collection('movies').findOne({});

	return movie;
};

const addOneService = async (request) => {
	const payload = request.payload;

	const status = await request.mongo.db.collection('movies').insertOne(payload);

	return status;
};

const deleteOneService = async (request) => {
	const id = request.params.id;
	const ObjectID = request.mongo.ObjectID;

	const status = await request.mongo.db
		.collection('movies')
		.deleteOne({ _id: new ObjectID(id) });

	return status;
};

const updateOneService = async (request) => {
	const id = request.params.id;
	const ObjectID = request.mongo.ObjectID;

	const payload = request.payload;

	const status = await request.mongo.db
		.collection('movies')
		.updateOne({ _id: new ObjectID(id) }, { $set: payload });

	return status;
};

export {
	findAllService,
	findOneService,
	addOneService,
	deleteOneService,
	updateOneService
};
