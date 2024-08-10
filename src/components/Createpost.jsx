import React, { useContext, useRef } from "react";
import { PostList } from "../store/PostListStore";

const Createpost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const postReactElement = useRef();
  const posTagsElement = useRef();

  const handlePostSubmit = (e) => {
    e.preventDefault();

    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const postReact = postReactElement.current.value;
    const postTags = posTagsElement.current.value.split(/(\s+)/);

    addPost(userId, postTitle, postBody, postReact, postTags);

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    postReactElement.current.value = "";
    posTagsElement.current.value = "";
  };
  return (
    <div>
      <form className="formPost" onSubmit={handlePostSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User Id
          </label>
          <input
            type="text"
            ref={userIdElement}
            className="form-control"
            id="userId"
            placeholder="#43482374"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="What you want to do ?"
            ref={postTitleElement}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            className="form-control"
            id="body"
            placeholder="Tell us more about it.."
            rows="3"
            ref={postBodyElement}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Reactions by People
          </label>
          <input
            type="text"
            className="form-control"
            id="reactions"
            ref={postReactElement}
            placeholder="How many people reacted to this post ?"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Post Tags
          </label>
          <input
            type="text"
            ref={posTagsElement}
            className="form-control"
            id="tags"
            placeholder="Use tag related to post"
          />
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-outline-primary">
          Post
        </button>
      </form>
    </div>
  );
};

export default Createpost;
