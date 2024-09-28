import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL="https://5000-bsccohort-reactprojects-l2rbeq50a0o.ws-us116.gitpod.io/blogs"

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => setBlogs(response.data))
      .catch((error) => {
        console.error("Error fetching blogs:", error);
        setError("Error fetching blogs. Please try again later.");
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
            <button onClick={() => navigate(`/blog/${blog.id}`)}>Read More</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
