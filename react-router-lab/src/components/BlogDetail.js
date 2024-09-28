import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL="https://5000-bsccohort-reactprojects-l2rbeq50a0o.ws-us116.gitpod.io/blogs"

function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
    .get(`${API_URL}/${id}`)
      .then((response) => setBlog(response.data))
      .catch((error) => {
        console.error("Error fetching the blog:", error);
        setError("Error fetching the blog. Please try again later.");
      });
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default BlogDetail;
