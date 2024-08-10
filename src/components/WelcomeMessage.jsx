import React, { useContext } from "react";
import { PostList } from "../store/PostListStore";

const WelcomeMessage = ({ selectTab, setSelectTab }) => {
  const { postList } = useContext(PostList);

  const handleTabClick1 = (tab, event) => {
    event.preventDefault();
    setSelectTab(tab);
  };

  return (
    postList.length === 0 && (
      <div className="welcome-message">
        <p>No posts available yet!</p>
        <button
          className="btn btn-primary"
          onClick={(event) => handleTabClick1("Create Post", event)}
        >
          <a
            href="/"
            className={`nav-link text-white ${
              selectTab === "Create Post" ? "active" : ""
            }`}
            aria-current="page"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Create Post
          </a>
        </button>
      </div>
    )
  );
};

export default WelcomeMessage;
