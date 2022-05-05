import React from "react";
import NavLink from "react-router-dom/NavLink";
import categories from "../../Categories.json";
import ListCategory from "./Listcategory";
import { signOut } from "../../Services/signOut";
const Sidebar = ({ user }) => {
  const keys = Object.keys(categories);

  const list = keys.map((keyx) => <ListCategory key={keyx} obj={keyx} />);
  return (
    <div className="wrapper">
      <div
        className="d-flex flex-column flex-shrink-0 p-1 bg-light"
        style={{ width: "210px", height: "875px" }}
      >
        <NavLink
          to="/profile"
          className="d-flex align-items-center mb-2 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
         
          <span className="fs-2">Categories</span>
        </NavLink>

        <hr />

        <ol className="mb-auto">{list}</ol>

        <div className="dropdown">
          <NavLink
            to="#"
            className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://picsum.photos/200"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong> User</strong>
          </NavLink>
          <ul
            className="dropdown-menu text-small shadow"
            aria-labelledby="dropdownUser2"
          >
            <li>
              <NavLink className="dropdown-item" to="/Cart">
                Cart
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" to="#">
                Settings
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" to="#">
                Profile
              </NavLink>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li onClick={signOut}>
              <NavLink className="dropdown-item" to="/">
                Sign Out
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
