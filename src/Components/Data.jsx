import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import datalist from "../Components/Datafile";
import axios from "axios";
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';






//--------- using Axios
const Data = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState();
  const navigate = useNavigate();
  // const [start, setStart] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const handleNext=()=>{
    setPage(prevpage=>prevpage+1)
  }
 const handlePrev=()=>{
  setPage(prevpage=>Math.max(prevpage-1,1))
 }

  // const handleEdit = (id) => {
  //   navigate(`/Editpost/${id}`);
  // };

  const handleDelete = () => {
    console.log(id);
    const update = [...data];
    update.splice(id, 1);
    setData(update);
  };

  const show = (myid) => {
    setId(myid);
  };


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const result = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);

        if (result.status === 200) {
          const newPosts = result.data;
  
          // Check if the fetched data is not empty before updating the state
          if (newPosts.length > 0) {
            setData(newPosts); // Concatenate new posts to existing data
          }
        } else {
          console.error('Error fetching data:', result.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, limit]);
  
  

   return  (
    <div className="container">
      {loading === true ? (
        <div class="d-flex justify-content-center">
          <div class="spinner-border text-success" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          <Link to="/Form" className="navbutton buttonlink">
            Add post
          </Link>

          {data.map((items, index) => (
            <div className="card mt-5 shadow">
              <div className="card-header shadow">
                <h1>{items.id}</h1>
              </div>

              <h2>{items.body}</h2>
              <span>
                {" "}
                <Link className="text" to={`/readmore/${items.id}`}>
                  Read More .....
                </Link>
                {/* using model for confermation deletation */}
                {/* { <button
                  className="btn btn-primary"
                  onClick={() => handleEdit(items.id)}
                >
                  Edit Post
                </button> } */}
                <Link
                  to={`/Editpost/${items.id}`}
                  state={{ state: items }}
                  className="navbutton buttonlink ms-2"
                >
                  Edit Post
                </Link>
                {/* <button
                  type="button"
                  className="green-btn ms-4 navbutton "
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => show(index)}
                >
                  Delete
                </button> */}
                      <Button variant="outlined" startIcon={<DeleteIcon />} 
                       type="button"
                       className=" ms-4 navbutton "
                       data-bs-toggle="modal"
                       data-bs-target="#exampleModal"
                       onClick={() => show(index)} >
        Delete
      </Button>

                <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Delete post
                        </h5>
                        <button
                          type="button"
                          className="green-btn"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        Are you sure you want to delete this post!
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="green-btn navbutton"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          className="ms-4  navbutton"
                          data-bs-dismiss="modal"
                          onClick={() => handleDelete(items)}
                        >
                          Delete post
                        </button>
                
                      </div>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          ))}
          <div>
            <select
              className=" mt-2 mb-3 btn btn-primary"
              onChange={(e) => setLimit(Number(e.target.value))}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <button
              className=" mb-3 btn btn-primary ms-2"
              onClick={handlePrev}
              disabled={page===1}
            >
              Previous
            </button>

            <button
              className=" mb-3 btn btn-primary ms-2"
              onClick={handleNext}
              disabled={data.length<limit}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Data;
