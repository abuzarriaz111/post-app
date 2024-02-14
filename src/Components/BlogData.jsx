import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
// import datalist from "../Components/Datafile";
import axios from "axios";

// import Fetch from "./Axios";

const BlogData = () => {
  const navigate = useNavigate()
// let {id}=useParams();
// const blogData=datalist.find(blogData=>String(blogData.id)===id);
const [data, setData] = useState([]);
let {id}=useParams();
const handleBack = () => {
  navigate(-1)
}


useEffect(() => {

  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => {
      setData(response.data);
 
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    })
}, []);
useEffect(()=>{

})

  return (
    <div className="container">
  
      <div className="card shadow">
        <div >
          
        <h1 >{data.userId}</h1>
          <h3>{data.body}</h3>
          <h2>{data.id}</h2> 
        </div>
        <button onClick={handleBack} className="navbutton">Back</button>
      </div>
      {/* <Fetch/> */}
    </div>
  );
};

export default BlogData;
