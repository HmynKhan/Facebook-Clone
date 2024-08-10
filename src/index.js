import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Createpost from "./componentsrouterv3/Createpost";
import PostList, { PostLoader } from "./componentsrouterv3/PostList";
import { createPostAction } from "./componentsrouterv3/Createpost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList />, loader: PostLoader },
      {
        path: "/createpost",
        element: <Createpost />,
        action: createPostAction,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
