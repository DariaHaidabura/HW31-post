import Home from "./components/Home/Home";
import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import "./index.css";
import "./App.css";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3004/posts"),
      axios.get("http://localhost:3004/comments"),
    ]).then((res) => {
      setPosts(res[0].data);
      setComments(res[1].data);
    });
  }, []);

  return (
    <>
      <div className="root">
        {posts.length && (
          <Home
            posts={posts}
            setPosts={setPosts}
            comments={comments}
            setComments={setComments}
          />
        )}
      </div>
    </>
  );
}

export default App;
