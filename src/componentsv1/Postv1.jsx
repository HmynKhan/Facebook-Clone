import React, { useContext } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { PostList } from "../store/PostListStorev1";

const Postv1 = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card cardPost" style={{ width: "63rem" }}>
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
          This post has been liked by {post.reactions.likes} people's.
        </div>
        <div className="alert alert-danger reactions" role="alert">
          This post has been disliked by {post.reactions.dislikes} people's.
        </div>
        <div className="alert alert-warning reactions" role="alert">
          This post has been viewed by {post.views} people's.
        </div>
      </div>
    </div>
  );
};

export default Postv1;
