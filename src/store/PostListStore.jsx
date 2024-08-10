import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
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
  const deletePost = (postId) => {
    console.log(postId);
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Go to Lahore",
    body: "Hi friends, I am going to Lahore for BS in UET LHR KSK.",
    react: "3K",
    userId: "user_9",
    tags: ["BS", "Lahore", "Study", "University"],
  },
  {
    id: "2",
    title: "Vacation in Swat",
    body: "Hey everyone! I am excited to share that I will be spending my summer vacation in Swat. Can't wait to explore the beautiful valleys and mountains!",
    react: "5K",
    userId: "user_15",
    tags: ["Vacation", "Swat", "Travel", "Nature"],
  },
  {
    id: "3",
    title: "Hiking Trip",
    body: "Just finished a wonderful hiking trip in the Margalla Hills. The view from the top was breathtaking!",
    react: "10K",
    userId: "user_7",
    tags: ["Hiking", "Margalla Hills", "Nature", "Adventure"],
  },
  {
    id: "4",
    title: "New Job",
    body: "Excited to announce that I have accepted a new job offer at a leading tech company. Looking forward to this new journey!",
    react: "8K",
    userId: "user_12",
    tags: ["Job", "Career", "Tech", "Announcement"],
  },
  {
    id: "5",
    title: "Graduation Day",
    body: "Today, I officially graduated from university! Thanks to all my friends and family for their support throughout this journey.",
    react: "15K",
    userId: "user_5",
    tags: ["Graduation", "Achievement", "University", "Celebration"],
  },
  {
    id: "6",
    title: "Cooking Class",
    body: "Just finished my first cooking class and learned to make some delicious dishes. Can't wait to try them out at home!",
    react: "4K",
    userId: "user_10",
    tags: ["Cooking", "Class", "Food", "Learning"],
  },
  {
    id: "7",
    title: "Yoga Retreat",
    body: "Spent a relaxing weekend at a yoga retreat. It was a great way to unwind and rejuvenate.",
    react: "6K",
    userId: "user_8",
    tags: ["Yoga", "Retreat", "Wellness", "Relaxation"],
  },
  {
    id: "8",
    title: "Book Club",
    body: "Had a great time discussing our latest book selection at the book club. Looking forward to the next one!",
    react: "2K",
    userId: "user_13",
    tags: ["Book Club", "Reading", "Discussion", "Literature"],
  },
  {
    id: "9",
    title: "Concert Night",
    body: "Went to an amazing concert last night. The live music and atmosphere were incredible!",
    react: "20K",
    userId: "user_3",
    tags: ["Concert", "Music", "Live", "Entertainment"],
  },
  {
    id: "10",
    title: "Art Exhibition",
    body: "Visited an art exhibition today. The artworks were stunning and very inspiring.",
    react: "7K",
    userId: "user_4",
    tags: ["Art", "Exhibition", "Culture", "Inspiration"],
  },
];

export default PostListProvider;
