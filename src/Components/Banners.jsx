import React from "react";
import banner from "../img/banner.png";
import Data from "./Data";
const Banners = () => {
  console.log("homepage")
  return (
    <div className="Banners">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 col-md-8 col-sm-10 col-12  heading">
            <h1>
              Articles for<br></br> <span>front-end devs</span>
            </h1>
            <p>Articels on web performence,responsive web design and more</p>
          </div>
          <div className="col-lg-6 col-md-8 col-sm-10 col-12 ">
            <img src={banner} style={{ width: 500 }} className="img-fluid"></img>
          </div>
        </div>
        <Data />
        
       
      </div>
    </div>
  );
};

export default Banners;
