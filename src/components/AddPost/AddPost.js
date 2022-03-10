import React, { useState } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import { Input } from "antd";
import "../AddPost/AddPost.css";

const { TextArea } = Input;

function AddPost({ setPosts, posts, nav, newId }) {
  const [newTitle, setTitle] = useState("");
  const [newPreview, setPreview] = useState("");
  const [newDesc, setDesc] = useState("");
  const [newAuthor, setAuthor] = useState("");

  const createNewPost = () => {
    const data = {
      id: newId,
      title: newTitle,
      preview: newPreview,
      description: newDesc,
      author: newAuthor,
    };

    axios.post(`http://localhost:3004/posts`, data).then((res) => {
      setPosts([...posts, res.data]);
      nav(`/posts`);
    });
  };

  const onTitleValueChanged = (e) => {
    setTitle(e.target.value);
  };

  const onPreviewValueChanged = (e) => {
    setPreview(e.target.value);
  };

  const onDescValueChanged = (e) => {
    setDesc(e.target.value);
  };

  const onAuthorValueChanged = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <>
      <div className="post-container">
        <p className="title">Posts №3</p>
        <button
          onClick={() => createNewPost()}
          style={{
            margin: "15px 0px 0px 1300px",
            width: "200px",
            heigth: "100px",
            position: "relative",
            display: "block",
          }}
          className="pink-button"
        >
          <span style={{ heigth: "50px" }}>Create/Update</span>
        </button>
        <p className="title">Title</p>
        <TextArea
          onChange={onTitleValueChanged}
          rows={3}
          style={{ width: "500px", height: "37px" }}
        />
        <p className="title">Preview</p>
        <TextArea
          onChange={onPreviewValueChanged}
          style={{ width: "500px", height: "37px" }}
        />
        <p className="title">Description</p>
        <TextArea
          onChange={onDescValueChanged}
          rows={4}
          style={{ width: "500px" }}
        />
        <p className="title">Author</p>
        <TextArea
          onChange={onAuthorValueChanged}
          rows={4}
          style={{ width: "500px", height: "37px" }}
        />
        <button
          onClick={(e) => createNewPost(e)}
          style={{
            margin: "30px 0px 0px 160px",
            width: "200px",
            heigth: "100px",
            position: "relative",
            display: "block",
          }}
          className="pink-button"
        >
          <span style={{ heigth: "50px" }}>Create/Update</span>
        </button>
      </div>
    </>
  );
}

export default AddPost;
