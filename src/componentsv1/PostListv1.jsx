import React, { useContext } from "react";
import Postv1 from "./Postv1";
import { PostList as PostListData } from "../store/PostListStorev1";

const PostListv1 = () => {
  const { postList } = useContext(PostListData);
  return (
    <>
      {postList.map((post) => (
        <Postv1 key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostListv1;
