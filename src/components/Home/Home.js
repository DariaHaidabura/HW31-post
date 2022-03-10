import React from "react";
import "antd/dist/antd.css";
import { Routes, Route, useNavigate } from "react-router-dom";

import { Breadcrumb } from "antd";
import Post from "../Post/Post";
import SelectedItem from "../SelectedItem/SelectedItem";
import AddPost from "../AddPost/AddPost";
import AddComm from "../AddComm/AddComm";
import "./Home.css";
import Background from "../../../src/travelling.png";

function Home({ posts, setPosts, comments, setComments }) {
  const newId = Math.round(Math.floor(Math.random() * 255)).toFixed(1) / 1;

  let nav = useNavigate();

  return (
    <>
      <Breadcrumb
        separator="/"
        style={{
          borderBottom: "solid 1px",
          width: "1765px",
          height: "120px",
          fontSize: "25px",
          backgroundColor: "white",
          borderBlockColor: "grey",
          padding: "24px",
          backgroundImage: `url(${Background})`,
          color: "white",
          backgroundSize: "100% auto",
        }}
      >
        <Breadcrumb.Item style={{ fontSize: "30px", color: "white" }} href="/">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item
          style={{ fontSize: "30px", color: "white" }}
          href="/posts"
        >
          Posts
        </Breadcrumb.Item>
      </Breadcrumb>

      <Routes>
        <Route
          path="/newposts"
          element={<AddPost posts={posts} setPosts={setPosts} nav={nav} />}
        ></Route>
        <Route
          path="/posts/:id"
          element={
            <SelectedItem
              posts={posts}
              comments={comments}
              setComments={setComments}
              nav={nav}
              newId={newId}
            />
          }
        ></Route>
        <Route
          path="/comments/:id"
          element={
            <AddComm
              posts={posts}
              comments={comments}
              setComments={setComments}
              newId={newId}
              nav={nav}
            />
          }
        ></Route>
        <Route
          exact
          path="posts"
          element={
            <Post
              posts={posts}
              nav={nav}
              comments={comments}
              setComments={setComments}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default Home;
