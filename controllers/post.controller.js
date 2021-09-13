import logger from "../logger.js";
import PostService from "../services/post.service.js";

async function getPosts(req, res, next) {
  try {
    res.send(await PostService.getPosts());
    logger.info(`GET /posts`);
  } catch (error) {
    next(error);
  }
}

export default { getPosts };
