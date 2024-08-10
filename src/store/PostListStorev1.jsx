import { createContext, useCallback, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPostS: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_INITIAL_POST") {
    newPostList = action.payload.posts;
  }

  return newPostList;
};

const PostListProviderv1 = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId, postTitle, postBody, postReact, postTags) => {
    console.log(`${userId} ${postTitle} ${postTags}`);
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        react: postReact,
        userId: userId,
        tags: postTags,
      },
    });
  };
  const deletePost = useCallback(
    (postId) => {
      console.log(postId);
      dispatchPostList({
        type: "DELETE_POST",
        payload: {
          postId,
        },
      });
    },
    [dispatchPostList]
  );

  const addInitialPostS = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POST",
      payload: {
        posts,
      },
    });
  };

  // useMemo Hook
  // const arr = [11, 2, 4, 5, 67, 8, 9, 1, 3, 2];
  // const sortArr = useMemo(() => arr.sort(), [arr]);
  // console.log(sortArr);

  return (
    <PostList.Provider
      value={{ postList, addPost, deletePost, addInitialPostS }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProviderv1;
