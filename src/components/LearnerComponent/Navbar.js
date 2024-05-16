import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Relevantz from '../../assets/Images/Relevantz.png';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../../Styles/Navbar.css'; // Adjust the path as needed
import Course from './Course';
 
function Navbar() {
  const [search, setSearch] = useState(""); // State for search query
 
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark ">
        <div className="container-fluid">
          <a className="navbar-brand" href="javascript:void(0)"><img src={Relevantz} alt="Relevantz Logo" /></a>
          <div><h5>Learning Management System</h5></div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Search bar component */}
          <div className="collapse navbar-collapse" id="mynavbar">
            <form className="d-flex">
              <div className="input-group search-bar" style={{width:400}}>
                <input
                  className="form-control "
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)} // Update search state
                />
                <button className="btn btn-light" type="button">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </form>
          </div>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link icon" href="javascript:void(0)">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link icon" href="javascript:void(0)">Course</a>
            </li>
          </ul>
          <div className="user-profile">
            <span>Priya</span>
          </div>
        </div>
      </nav>
      {/* Pass the search state to Course component */}
      <Course search={search} />
 
 
    </div>
  );
}
 
export default Navbar;
