import React from "react";
import { useLocation } from "react-router-dom";

const BlogData = () => {
  const { state } = useLocation();
  console.log(useLocation(),"------");
  console.log(state,"data---")
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h2>{state.title}</h2>
          <p>{state.body}</p>
          <p>{state.id}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogData;
