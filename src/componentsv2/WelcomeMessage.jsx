import React, { useContext, useEffect, useState } from "react";
import { PostList } from "../store/PostListStorev3";
import LoadingSpinnerv1 from "../componentsv1/LoadingSpinnerv1";

const WelcomeMessagev = () => {
  const { postList, addInitialPostS } = useContext(PostList);

  const [fetching, setFetching] = useState(false);

  const [dataFetched, setDataFecthed] = useState(false);

  // useEffect Hook

  // useEffect(() => {
  //   setFetching(true);
  //   const controller = new AbortController();
  //   const signal = controller.signal;

  //   fetch("https://dummyjson.com/posts", { signal })
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       addInitialPostS(data.posts);
  //       setFetching(false);
  //     })
  //     .catch((error) => {
  //       if (error.name === "AbortError") {
  //         console.log("Fetch aborted");
  //       } else {
  //         console.error("Fetch error: ", error);
  //         setFetching(false);
  //       }
  //     });

  //   return () => {
  //     console.log("Cleaning up useEffect");
  //     controller.abort();
  //   };
  // }, []);

  // if (!dataFetched) {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPostS(data.posts);
  //     });
  //   setDataFecthed(true);
  // }

  const onGetPostClick = () => {
    console.log("get post from server");
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPostS(data.posts);
      });
  };

  return (
    <>
      {fetching && <LoadingSpinnerv1 />}

      {!fetching && postList.length === 0 && (
        <div className="welcome-message">
          <p>No posts available yet!</p>
          <button className="btn btn-primary" onClick={onGetPostClick}>
            data fetch from server
          </button>
        </div>
      )}
    </>
  );
};

export default WelcomeMessagev;
