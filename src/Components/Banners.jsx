import React from "react";
import banner from "../img/banner.png";
import Data from "./Data";
const Banners = () => {
  return (
    <div className="Banners">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-6 heading">
            <h1>
              Articles for<br></br> <span>front-end devs</span>
            </h1>
            <p>Articels on web performence,responsive web design and more</p>
          </div>
          <div className="col-4">
            <img src={banner} style={{ width: 500 }}></img>
          </div>
        </div>
        <Data />
        console.log(Data);
      </div>
    </div>
  );
};

export default Banners;
