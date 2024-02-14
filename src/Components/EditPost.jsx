import axios from "axios";
import React, { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";

const EditPost = () => {
  const { state } = useLocation();
  const data = state.state;

  const navigate = useNavigate();

  const [id, setId] = useState(data?.id ? data?.id : "");
  const [title, setTitle] = useState(data?.title ? data?.title :"");
  const [body, setBody] = useState(data?.body ? data?.body :"");
  const [userId, setUSerId] = useState(data?.userId ? data?.userId: "");
  const [error,setError]=useState("")
  const [useriderror,setuseriderror]=useState(" ")
  const [bodyerror,seterrorbody]=useState("")
  const handleTitle = (e) => {
    const value = e.target.value;
    setTitle(value);
    if (value.length < 5 || !value.match(/^[a-zA-Z\s]+$/)) {
      setError("Field must have at least 5 characters and only letters");
      return;
    } else {
      setError(""); // Clear error message when condition is met
    }
  };
  const handleUserid = (e) => {
    const value =parseInt (e.target.value);
    setUSerId(value);
    if (value < 1 || isNaN(value)) {
      setuseriderror("Number enter the Positive number");
      return; // Exit the function if condition is met
    } else {
      setuseriderror("");
    }
  };
   const handleBody=(e)=>{
    const value=e.target.value;
    setBody(value)
    if(value.length<1)
    {
      seterrorbody("Body limit has 500");
      return;
    } 
    if(value.length>500)
    {
     seterrorbody='Body limit has 500';
     return;
    }
    else
    {
   
     seterrorbody(" ")
    }
     }

  const handleBack = () => {
    navigate(-1);
  };

  const handleEditData = (e) => {
    e.preventDefault();
    const newpost = { title: title, body: body, userId: userId };
    console.log(newpost, "new---");
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`,{newpost} )
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        }
      });
  };

  return (
    <div className="container py-3 editpost">
      <div className="card shadow">
        <h2>Edit Your Post</h2>
        <form>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput"></label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Title"
              value={title}
              onChange={handleTitle}
              required
            />
            {error}
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2"></label>
            <textarea
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Body"
              value={body}
              onChange={handleBody}
              required
            />
            {bodyerror}
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2"></label>
            <input
              type="number"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="User ID"
              value={userId}
              onChange={handleUserid}
              required
            />
            {useriderror}
          </div>
          <button className="navbutton mt-3" onClick={handleEditData}>
            Submit
          </button>
        </form>
        <div>
        <button className="navbutton displaybutton mt-2" onClick={handleBack}>
            Back
          </button>
        </div>
          
      </div>
    </div>
  );
};

export default EditPost;
