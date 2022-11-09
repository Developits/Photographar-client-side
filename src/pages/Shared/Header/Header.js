import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <div className="flex flex-col text-center">
          <div>
            <Link className="btn btn-ghost normal-case text-xl">
              <img
                className="w-9 h-9"
                src="https://cdn4.iconfinder.com/data/icons/camera-7/60/08_Camera_Rotation-512.png"
                alt=""
              />
            </Link>
          </div>
          <div>
            <p className="text-xs font-bold">Reza photography</p>
          </div>
        </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link className="font-bold" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="font-bold" to="/services">
              Services
            </Link>
          </li>
          <li>
            <Link className="font-bold" to="/blog">
              Blog
            </Link>
          </li>
          <>
            {user?.uid ? (
              <>
                <li>
                  <Link className="font-bold" to="/addservice">
                    Add service
                  </Link>
                </li>
                <li>
                  <Link className="font-bold" to="/myreviews">
                    My reviews
                  </Link>
                </li>
                <li>
                  <Link className="font-bold" onClick={handleLogOut}>
                    LogOut
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link className="font-bold" to="/register">
                    Register
                  </Link>
                </li>
                <li>
                  <Link className="font-bold" to="/login">
                    Login
                  </Link>
                </li>
              </>
            )}
          </>
        </ul>
      </div>
    </div>
  );
};

export default Header;
