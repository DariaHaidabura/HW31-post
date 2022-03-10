import "./Post.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import { Card } from "antd";

const { Meta } = Card;

function Post({ posts, nav, comments, setComments, isLoading, setIsLoading }) {
  return (
    <>
      <div style={{ height: "50px", width: "100% auto" }}>
        <p className="all-posts">All Posts</p>
        <button
          style={{
            position: "relative",
            left: "1500px",
            bottom: "130px",
            width: "150px",
            heigth: "60px",
          }}
          onClick={() => {
            nav(`/newposts`);
          }}
          className="pink-button"
        >
          <span>Add Post</span>
        </button>
      </div>
      {posts.map((post) => (
        <Card
          className="posts"
          key={post.id}
          cover={<img className="preview" alt="example" src={post.preview} />}
        >
          <button
            onClick={() => {
              nav(`/posts/${post.id}`);
            }}
            className="edit"
          >
            Edit
          </button>
          {post.description}
          <p className="author">{post.author}</p>
        </Card>
      ))}
      <div
        style={{
          position: "relative",
          width: "100%",
          heigth: "40px",
          bottom: "5px",
          top: "80px",
          marginBottom: "100px",
        }}
      ></div>
    </>
  );
}

export default Post;
