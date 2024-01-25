import React, { useState } from "react";
import { Link } from "react-router-dom";
import datalist from "../Components/Datafile";
import axios from "axios";

const Data = () => {
 

  // const navigate=useNavigate();
  // const handleclick=((datalist)=>{
  //   if(datalist){
  //   navigate(`blogdata/${datalist.id}`,{state:datalist});
  //   localStorage.setItem('datalist',JSON.stringify(datalist))
  //   }
  // })



 const[post,setPost]=useState(datalist);
   const handledelet=(id)=>{
    const Delete = window.confirm('Are you sure you want to delete?');
     if (Delete){
    const update=post.filter(post=>post.id !==id)
    setPost(update)
     }
   }




  
  return (
 
    <div className="container">
      {post.map((items)=>(
       <div className="card mt-5">
       
        <h1>{items.id}</h1>
          <h2>{items.body}</h2>
          <span> <Link to={`/readmore/${items.id}`}>
          read more .....
        </Link>
        <button className="ms-4 bg-secondary" onClick={()=>handledelet(items.id)}>Delete</button>
        </span>
       </div>
      ))}

    </div>


  )
      }



export default Data;
