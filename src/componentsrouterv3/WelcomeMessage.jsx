import React from "react";
import { useLoaderData } from "react-router-dom";
import LoadingSpinnerv1 from "../componentsv1/LoadingSpinnerv1";

const WelcomeMessagev = () => {
  const postList = useLoaderData();

  if (!postList) {
    return <LoadingSpinnerv1 />;
  }

  return (
    <>
      {postList.length !== 0 && (
        <div className="welcome-message">
          <p>No posts available yet!</p>
        </div>
      )}
    </>
  );
};

export default WelcomeMessagev;
