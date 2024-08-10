import React from "react";
import dp from "../assets/dp.jpg";
import facebook from "../assets/facebook.png";
import { Link } from "react-router-dom";

const Sidebar = () => {

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
      style={{ width: "220px" }}
    >
      <Link
        to="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <img
          src={facebook}
          className="bi pe-none me-2"
          alt="React Icon"
          width="40"
          height="32"
        />

        <span className="fs-4">facebook</span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item nav_li">
          <Link
            to="/"
            className={`nav-link text-white px-2`}
            aria-current="page"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            HOME
          </Link>
        </li>
        <li className="nav_li">
          <Link to="/createpost" className={`nav-link text-white px-2`}>
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            CREATE POST
          </Link>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <Link
          to="/"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src={dp}
            alt=""
            width="50"
            height="50"
            className="rounded-circle me-2"
          />
          <strong>humayounsaeed</strong>
        </Link>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <a className="dropdown-item" href=" ">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href=" ">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href=" ">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href=" ">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
