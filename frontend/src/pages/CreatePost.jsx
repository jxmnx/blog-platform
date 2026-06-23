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
    <div className="container mt-5">
      <h2>Create Blog Post</h2>

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
          placeholder="Write your blog..."
          rows="5"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <button className="btn btn-success">
          Create Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;