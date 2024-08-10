import React, { useContext } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { PostList } from "../store/PostListStoreRouterv4";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card cardPost" style={{ width: "47rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <RiDeleteBinLine className="DeleteBtn" />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tags, index) => (
          <span key={index} className="badge text-bg-primary hashTag">
            {tags.trim()}
          </span>
        ))}

        <div className="alert alert-primary reactions" role="alert">
          This post has been reacted by {post.react} people.
        </div>
      </div>
    </div>
  );
};

export default Post;
