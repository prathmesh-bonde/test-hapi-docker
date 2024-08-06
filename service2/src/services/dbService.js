const findAllService = async (request) => {
  const movies = await request.mongo.db
    .collection("movies")
    .find({})
    .limit(20)
    .toArray();

  return movies;
};

const findOneService = async (request) => {
  const movie = await request.mongo.db.collection("movies").findOne({});

  return movie;
};

export { findAllService, findOneService };
