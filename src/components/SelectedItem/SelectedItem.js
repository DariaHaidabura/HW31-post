import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "antd/dist/antd.css";
import { Card, Divider, List } from "antd";
import "./SelectedItem.css";

function SelectedItem({ posts, comments, nav }) {
  const [postToEdit, setPostToEdit] = useState({});
  const [postComments, setPostComments] = useState([]);
  const params = useParams();

  useEffect(() => {
    setPostToEdit(setSelectedPost(params.id));
    setPostComments(setSelectedComments(params.id));
  }, []);

  const setSelectedPost = (editedPostId) => {
    return posts.find((post) => editedPostId == post.id);
  };

  const setSelectedComments = (postId) => {
    return comments.filter((comment) => comment.postId == postId);
  };

  return (
    <>
      <div className="selected-item">
        <Card
          className="posts"
          key={postToEdit.id}
          cover={
            <img className="preview" alt="example" src={postToEdit.preview} />
          }
        >
          {postToEdit.description}
          <p style={{ fontSize: "20px", fontWeight: "500" }}>
            {postToEdit.author}
          </p>
        </Card>
      </div>
      {postComments.length && (
        <div className="comments-list">
          <Divider orientation="left">Comments:</Divider>
          <List bordered>
            {postComments.map((postComment) => (
              <List.Item className="comment-item" key={postComment.id}>
                {postComment.body}
              </List.Item>
            ))}
          </List>
        </div>
      )}

      <div style={{ height: "50px", width: "100% auto", position: "absolute" }}>
        <p className="all-posts"></p>
        <button
          style={{
            position: "relative",
            left: "750px",
            bottom: "50px",
            width: "200px",
            heigth: "60px",
          }}
          onClick={() => {
            nav(`/comments/${postToEdit.id}`);
          }}
          className="pink-button"
        >
          <span>Add Comment</span>
        </button>
      </div>
    </>
  );
}

export default SelectedItem;
