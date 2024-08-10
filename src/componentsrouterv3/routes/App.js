// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Sidebar from "./components/Sidebar";
// import Createpost from "./components/Createpost";
// import PostList from "./components/PostList";
// import { useState } from "react";
// import PostListProvider from "./store/PostListStore";
// import WelcomeMessage from "./components/WelcomeMessage";

// function App() {
//   const [selectTab, setSelectTab] = useState("");
//   return (
//     <PostListProvider>
//       <div className="appContainer">
//         <Sidebar selectTab={selectTab} setSelectTab={setSelectTab} />
//         <div className="content">
//           <Header />
//           {selectTab === "Home" ? <PostList /> : <Createpost />}
//           <WelcomeMessage selectTab={selectTab} setSelectTab={setSelectTab} />

//           <Footer />
//         </div>
//       </div>
//     </PostListProvider>
//   );
// }

// export default App;

// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Headerv1 from "./componentsv1/Headerv1";
// import Footerv1 from "./componentsv1/Footerv1";
// import Sidebarv1 from "./componentsv1/Sidebarv1";
// import Createpostv1 from "./componentsv1/Createpostv1";
// import PostListv1 from "./componentsv1/PostListv1";
// import { useContext, useState } from "react";
// import PostListProviderv1, { PostList } from "./store/PostListStorev1";
// import WelcomeMessagev1 from "./componentsv1/WelcomeMessagev1";

// function App() {
//   const [selectTab, setSelectTab] = useState("Home");

//   return (
//     <PostListProviderv1>
//       <div className="appContainer">
//         <Sidebarv1 selectTab={selectTab} setSelectTab={setSelectTab} />
//         <div className="content">
//           <Headerv1 />
//           {selectTab === "Home" ? <PostListv1 /> : <Createpostv1 />}
//           <WelcomeMessagev1 />
//           <Footerv1 />
//         </div>
//       </div>
//     </PostListProviderv1>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import Header from "./componentsv2/Header";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import Footer from "./componentsv2/Footer";
// import Sidebar from "./componentsv2/Sidebar";
// import Createpost from "./componentsv2/Createpost";
// import PostList from "./componentsv2/PostList";
// import WelcomeMessage from "./componentsv2/WelcomeMessage";
// import PostListProvider from "./store/PostListStorev3";

// const App = () => {
//   const [tab, seTab] = useState("Home");

//   return (
//     <>
//       <PostListProvider>
//         <div className="appContainer">
//           <Sidebar tab={tab} seTab={seTab} />
//           <div className="content">
//             <Header />
//             {tab === "Home" ? <PostList /> : <Createpost />}
//             <WelcomeMessage />
//             <Footer />
//           </div>
//         </div>
//       </PostListProvider>
//     </>
//   );
// };

// export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Headerv1 from "./componentsrouterv3/Header";
import Footerv1 from "./componentsrouterv3/Footer";
import Sidebarv1 from "./componentsrouterv3/Sidebar";
import Createpostv1 from "./componentsrouterv3/Createpost";
import PostListv1 from "./componentsrouterv3/PostList";
import { useContext, useState } from "react";
import PostListProviderv1, { PostList } from "./store/PostListStoreRouterv4";
import WelcomeMessagev1 from "./componentsrouterv3/WelcomeMessage";

function App() {
  const [tab, seTab] = useState("Home");

  return (
    <PostListProviderv1>
      <div className="appContainer">
        <Sidebarv1 tab={tab} seTab={seTab} />
        <div className="content">
          <Headerv1 />
          {tab === "Home" ? <PostListv1 /> : <Createpostv1 />}
          <WelcomeMessagev1 />
          <Footerv1 />
        </div>
      </div>
    </PostListProviderv1>
  );
}

export default App;
