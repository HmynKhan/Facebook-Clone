import React, { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/PostListStorev3";

const PostList = () => {
  const { postList } = useContext(PostListData);
  console.log(postList);
  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
