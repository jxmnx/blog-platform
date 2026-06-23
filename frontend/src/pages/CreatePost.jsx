import { useState } from "react";
import { createPost } from "../services/postService";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createPost(formData);

      alert("Post Created Successfully");

      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Error creating post");
    }
  };

 return (
  <div className="auth-card">
    <h2 className="text-center mb-4">
      Write a New Story ✍️
    </h2>

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Blog Title"
        className="form-control mb-3"
        onChange={handleChange}
      />

      <textarea
        name="content"
        placeholder="Share your thoughts..."
        rows="6"
        className="form-control mb-4"
        onChange={handleChange}
      />

      <button
        type="submit"
        className="btn-pink w-100"
      >
        Publish Post
      </button>
    </form>
  </div>
);
}

export default CreatePost;