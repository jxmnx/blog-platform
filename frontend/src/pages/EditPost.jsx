import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getPosts,
  updatePost,
} from "../services/postService";

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    const fetchPost = async () => {
      const posts = await getPosts();

      const post = posts.find(
        (p) => p._id === id
      );

      if (post) {
        setFormData({
          title: post.title,
          content: post.content,
        });
      }
    };

    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updatePost(id, formData);

      alert("Post Updated!");

      navigate(`/post/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="auth-card">
      <h2 className="text-center mb-4">
        Edit Post ✏️
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          className="form-control mb-3"
          value={formData.title}
          onChange={handleChange}
        />

        <textarea
          name="content"
          rows="6"
          className="form-control mb-4"
          value={formData.content}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="btn-pink w-100"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditPost;