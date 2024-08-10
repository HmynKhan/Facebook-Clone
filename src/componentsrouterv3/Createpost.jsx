import { useContext } from "react";
import { Form, redirect } from "react-router-dom";
// import { PostList } from "../store/PostListStoreRouterv4";
import { PostLoader } from "./componentsrouterv3/PostList";

const Createpost = () => {
  return (
    <div>
      <Form method="post" className="formPost">
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User Id
          </label>
          <input
            type="text"
            name="userId"
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
            name="title"
            placeholder="What you want to do ?"
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
            name="body"
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
            name="reactions"
            placeholder="How many people reacted to this post ?"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Post Tags
          </label>
          <input
            type="text"
            name="tags"
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
      </Form>
    </div>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      // addPost(post);
      console.log(post);
      // PostLoader(post);
    });

  return redirect("/");
}

export default Createpost;
