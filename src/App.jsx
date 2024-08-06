import React from "react";
// import CounterButton from "./counter-example/CounterButton";
// import CounterValue from "./counter-example/CounterValue";
import BlogList from "./blog-app/BlogList";
import AddNewBlog from "./blog-app/AddNewBlog";

const App = () => {
  return (
    <div>
      <h1 className="main-heading">BLOG APP</h1>
      <AddNewBlog />
      <BlogList />



      {/* <CounterButton />
      <CounterValue /> */}
    </div>
  )
};

export default App;
