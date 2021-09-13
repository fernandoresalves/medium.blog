import PostRepository from "../repositories/post.repository.js";

async function getPosts() {
  return await PostRepository.getPosts();
}

export default { getPosts };
