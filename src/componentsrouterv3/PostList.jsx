import React, { useContext } from "react";
import Post from "./Post";
import { useLoaderData } from "react-router-dom";
const PostList = () => {
  const postList = useLoaderData();

  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export const PostLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((data) => {
      return data.posts || []; // Ensure it returns an array
    })
    .catch((error) => {
      if (error.name === "AbortError") {
        console.log("Fetch aborted");
      } else {
        console.error("Fetch error: ", error);
      }
      return []; // Return an empty array in case of error
    });
};

export default PostList;
