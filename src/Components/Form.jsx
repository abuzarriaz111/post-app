import axios from "axios";
import React from "react";
import { useState } from "react";
import { json,Link, useNavigate } from "react-router-dom";

const Form = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUSerId] = useState("");
  const [error,setError]=useState("")
  const [useriderror,setuseriderror]=useState(" ")
  const [bodyerror,seterrorbody]=useState("")
  const [loading, setLoading] = useState(false);
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
  
  
  const navigate=useNavigate();
  const handleBack = () => {
    navigate(-1);
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // if (!error && !useriderror && !bodyerror) {
      const newpost = { title: title, body: body, userId: userId };
      console.log(newpost, "new---");
  
  
      axios
        .post("https://jsonplaceholder.typicode.com/posts", newpost)
        .then((response) => {
          console.log(response);
          if (response.status >= 200 && response.status < 300) {
            return response.data;
          }
        })
        .then((data) => {
          // Handle successful response data here
          console.log("Post created:", data);
        })
        .catch((error) => {
          // Handle errors here
          console.error("Error creating post:", error);
        })
        .finally(() => {
          setLoading(false);// Set loading state to false after request completes
        });
    
  };
  

  return (
    <div className="container mt-5">
        {loading === true ? (
        <div class="d-flex justify-content-center">
          <div class="spinner-border text-success" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) :(
        <div className="card shadow ">
        <h2>Add Your Post</h2>
        <form onSubmit={handlesubmit}>
        
          <label for="formGroupExampleInput"></label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Title"
            value={title}
            onChange={handleTitle}
            required
            minLength={5}
          />
          {error}
         
          <label for="formGroupExampleInput2"></label>
          <textarea
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Body"
            value={body}
            onChange={handleBody}
            required
            minLength={5}
            maxLength={500}
          />
           {bodyerror}
           <label for="formGroupExampleInput2"></label>
          
          <input
            type="number"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="User ID"
            value={userId}
            onChange={handleUserid}
            required
          />
          {useriderror}
          
          <button className="navbutton mt-3" type="submit">
            submit
          </button>
          
          <button className="navbutton ms-3" onClick={handleBack}>Back</button>

         
         
        </form>
      </div>
    
   
      ) }
      </div>

  );
 
};


export default Form;
