import React from "react";
import tree from "../img/tree.jpg";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img src={tree} style={{ width: 50 }}></img>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="/">
                Work <i class="fa-solid fa-briefcase"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Services<i class="fa-solid fa-mug-saucer"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                About
                <i class="fa-solid fa-heart"></i>
              </a>
            </li>
          </ul>
          <div class="d-flex align-items-center justify-content-center ">
            <a class="nav-link blog" href="/">
              blog
              <i class="fa-solid fa-message"></i>
            </a>
            <button class="btn btn-outline-success navbutton" type="submit">
              Planner <i class="fa-solid fa-leaf "></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
