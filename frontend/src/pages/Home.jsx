import { useEffect, useState } from "react";
import {
  getPosts,
  deletePost,
} from "../services/postService";
import { Link } from "react-router-dom";
function Home() {
    const handleDelete = async (id) => {
  try {
    await deletePost(id);

    setPosts(
      posts.filter((post) => post._id !== id)
    );
  } catch (error) {
    console.error(error);
  }
};
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="page-container">
      <h1 className="blog-title">
  Welcome to BlogSpace
</h1>

<p className="text-center mb-5">
  Share your stories and ideas.
</p>

      {posts.map((post) => (
 <div key={post._id} className="card-custom">
  <h3>{post.title}</h3>
  <p>
  {post.content.substring(0, 150)}...
</p>

  <div className="d-flex justify-content-between mt-3">
    <Link
  to={`/post/${post._id}`}
  className="read-more"
>
  Read More →
</Link>

    <button
      className="btn btn-danger btn-sm"
      onClick={() => handleDelete(post._id)}
    >
      Delete
    </button>
  </div>
</div>
))}
    </div>
  );
}

export default Home;