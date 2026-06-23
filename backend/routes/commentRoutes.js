const express = require("express");

const {
  addComment,
  getComments,
} = require("../controllers/commentController");

const router = express.Router();

router.post("/:postId", addComment);
router.get("/:postId", getComments);

module.exports = router;