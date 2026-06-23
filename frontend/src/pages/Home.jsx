import { useEffect, useState } from "react";
import { getPosts } from "../services/postService";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Blog Platform</h2>

      {posts.map((post) => (
        <div key={post._id} className="card p-3 mb-3">
          <h4>{post.title}</h4>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;