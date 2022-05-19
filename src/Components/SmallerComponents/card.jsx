import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ id, Name, price, onStock, Description, pic }) => {
  const apiEnd = "/products/" + id;
  const handleClick = () => {};

  return (
    <>
      <NavLink className="col m-0 text-decoration-none" to={apiEnd}>
        <div
          className="card
       s-card-container 
      s-overflow-hidden
      aok-relative
      s-expandheight
      s-include-content-margin
      s-latency-cf-section
      mt-2
      "
          style={{ width: "100%", backgroundColor: "#dee3e2" }}
        >
          <img
            className="card-img-top mx-auto d-block"
            src={pic}
            alt="Some random "
          />
          <div className="card-body">
            <p
              className="card-text"
              style={{ color: "black", textAlign: "center" }}
            >
              <b>{Name}</b>
               <br /> On Stock:{onStock}
              <br />  Price :
              <span  style={{ color:"red"}}> Rs. {price}</span>
             
             
              <br /> {Description}
            </p>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default Card;
