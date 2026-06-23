const Comment = require("../models/Comment");

const addComment = async (req, res) => {
  try {
    const { content } = req.body;
    const { postId } = req.params;

    const comment = await Comment.create({
      content,
      post: postId,
    });

    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getComments = async (req, res) => {
  try {
    const { postId } = req.params;

    const comments = await Comment.find({
      post: postId,
    });

    res.json(comments);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addComment,
  getComments,
};