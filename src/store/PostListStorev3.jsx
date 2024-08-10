// import { createContext, useReducer } from "react";

// export const PostList = createContext({
//   postList: [],
//   addPost: () => {},
//   deletePost: () => {},
//   addInitialPostS: () => {},
// });

// const postListReducer = (currPostList, action) => {
//   let newPostList = currPostList;
//   if (action.type === "DELETE_POST") {
//     newPostList = currPostList.filter(
//       (post) => post.id !== action.payload.postId
//     );
//   } else if (action.type === "ADD_POST") {
//     newPostList = [action.payload, ...currPostList];
//   } else if (action.type === "ADD_INITIAL_POST") {
//     newPostList = action.payload.posts;
//   }

//   return newPostList;
// };

// const PostListProvider = ({ children }) => {
//   const addPost = (userId, postTitle, postBody, postReact, postTags) => {
//     console.log(`${userId} ${postTitle} ${postTags}`);
//     dispatchPostList({
//       type: "ADD_POST",
//       payload: {
//         id: Date.now(),
//         title: postTitle,
//         body: postBody,
//         react: postReact,
//         userId: userId,
//         tags: postTags,
//       },
//     });
//   };
//   const deletePost = (postId) => {
//     console.log(postId);
//     dispatchPostList({
//       type: "DELETE_POST",
//       payload: {
//         postId,
//       },
//     });
//   };

//   const addInitialPostS = (posts) => {
//     dispatchPostList({
//       type: "ADD_INITIAL_POST",
//       payload: {
//         posts,
//       },
//     });
//   };
//   const [postList, dispatchPostList] = useReducer(postListReducer, []);

//   return (
//     <PostList.Provider
//       value={{ postList, addPost, deletePost, addInitialPostS }}
//     >
//       {children}
//     </PostList.Provider>
//   );
// };

// export default PostListProvider;

import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPosts: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: { posts },
    });
  };

  return (
    <PostListContext.Provider
      value={{ postList, addPost, deletePost, addInitialPosts }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
