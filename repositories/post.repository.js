import { getClient } from "./mongo.db.js";

async function getPosts() {
  const client = getClient();
  try {
    await client.connect();
    return await client.db("blog").collection("post").find().toArray();
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  }
}

export default { getPosts };
