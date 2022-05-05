import React from "react";
import { NavLink } from "react-router-dom";
import category from "../../Categories.json";
const ListCategory = ({ obj }) => {
  const array = category[obj];
 
  const listItems = array.map((items) => <li  key={items}><NavLink to={"/search/"+items} >{items}</NavLink></li>);
  return (
    <div>
      <strong>{obj}</strong>
      <ul>{listItems}</ul>
      <hr/>
    </div>
  );
};

export default ListCategory;
