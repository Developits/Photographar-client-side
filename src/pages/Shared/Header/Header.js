import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl">
          <img
            className="w-7 h-7"
            src="https://cdn4.iconfinder.com/data/icons/camera-7/60/08_Camera_Rotation-512.png"
            alt=""
          />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link>Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
