import React, { useState, useEffect } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import { Input, Divider, List } from "antd";
import { useParams } from "react-router";
import SelectedItem from "../SelectedItem/SelectedItem";

const { TextArea } = Input;

function AddComm({ newId, posts, comments, setComments, nav }) {
  const [postToEditComm, setPostToEditComm] = useState({}) 
  const [oldComment, setOldComent] = useState([]) 
  const [newComment, setNewComment] = useState([]) 
  const paramsComm = useParams()

  useEffect(() => {
    setPostToEditComm(setSelectedPostToComm(paramsComm.id))
    setOldComent(setSelectedOldComm(paramsComm.id))
   }, []);

   const createNewComm = () => {
    const data = {
      id: newId,
      postId: postToEditComm.id,
      body: newComment
    };

    axios
      .post(`http://localhost:3004/comments`, data)
      .then((res) => { setComments([...comments, res.data]);  nav(`/posts`)});
    
  };

  const onValueComment = (e) => {
    setNewComment(e.target.value);
  };

  const setSelectedPostToComm = (editedPostId) => {
    return posts.find(post => editedPostId == post.id)
  }

  const setSelectedOldComm = (editedCommId) => {
    return comments.filter(comment => editedCommId == comment.id)
  }

  return (
    <>
      <div className="post-container">
        <p className="title">Posts №{postToEditComm.id}</p>
        <p className="title">{postToEditComm.title}</p>
        <p className="post-text">{postToEditComm.description}</p>
        {(oldComment > 0) ? (<div className="old-comments-list" >
          <Divider className="violet" orientation="left">Comments:</Divider>
    <List
      bordered
      >
    {oldComment.map((oldComment) => (<List.Item className="comment-item" key={oldComment.id}>{oldComment.body}
    </List.Item>))}
    </List>
      </div> ) : (<div></div>)}
      <TextArea
          onChange={onValueComment}
          style={{ width: "1200px", height: "37px", display:"block" }}
        />
        <button
          onClick={() => createNewComm()}
          style={{
            margin: "40px 0px 0px 500px",
            width: "200px",
            heigth: "100px",
            position: "relative",
            display: "block",
          }}
          className="pink-button"
        >
          <span style={{ heigth: "50px" }}>Add Comment</span>
        </button>
      </div>
    </>
  );
}

export default AddComm;
