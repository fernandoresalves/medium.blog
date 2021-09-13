import mongodb from "mongodb";

function getClient() {
  try {
    const url = "mongodb://localhost:27017";
    return new mongodb.MongoClient(url);
  } catch (error) {
    throw error;
  }
}

export { getClient };
