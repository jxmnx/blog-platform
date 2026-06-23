import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPosts } from "../services/postService";
import {
  getComments,
  addComment,
} from "../services/commentService";

function PostDetails() {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const posts = await getPosts();

        const foundPost = posts.find(
          (p) => p._id === id
        );

        setPost(foundPost);

        const commentData =
          await getComments(id);

        setComments(commentData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPost();
  }, [id]);

  const handleComment = async () => {
    if (!commentText.trim()) return;

    try {
      const newComment = await addComment(
        id,
        commentText
      );

      setComments([
        ...comments,
        newComment,
      ]);

      setCommentText("");
    } catch (error) {
      console.error(error);
    }
  };

  if (!post) {
    return (
      <div className="page-container">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="card-custom">
        <Link
          to={`/edit/${post._id}`}
          className="btn btn-warning mb-3"
        >
          ✏️ Edit Post
        </Link>

        <h1>{post.title}</h1>

        <p
          style={{
            whiteSpace: "pre-line",
          }}
        >
          {post.content}
        </p>
      </div>

      <div className="card-custom">
        <h3>Comments</h3>

        {comments.length === 0 ? (
          <p>No comments yet.</p>
        ) : (
          comments.map((comment) => (
            <div
              key={comment._id}
              className="comment-item"
            >
              💬 {comment.content}
            </div>
          ))
        )}

        <textarea
          className="form-control mt-3"
          rows="3"
          placeholder="Write a comment..."
          value={commentText}
          onChange={(e) =>
            setCommentText(e.target.value)
          }
        />

        <button
          className="btn-pink mt-3"
          onClick={handleComment}
        >
          Add Comment
        </button>
      </div>
    </div>
  );
}

export default PostDetails;