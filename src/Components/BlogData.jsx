import React from "react";
import { useParams } from "react-router-dom";
import datalist from "../Components/Datafile";
import Fetch from "./Axios";

const BlogData = () => {
let {id}=useParams();
const blogData=datalist.find(blogData=>String(blogData.id)===id);

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h2>{blogData.id}</h2>
          <h3>{blogData.body}</h3>
         
        </div>
      </div>
      <Fetch/>
    </div>
  );
};

export default BlogData;
