import React from "react";
import {Link } from "react-router-dom";

const Card = ( {id,Name, price, onStock,Description,pic} ) => {
 
 const apiEnd="/products/"+id;
 const handleClick=()=>{

  }
 
 return (
    
    <>
    <Link className="col m-0"
    to={apiEnd}
    
    
    >
      <div className="card
       s-card-container 
      s-overflow-hidden
      aok-relative
      s-expandheight
      s-include-content-margin
      s-latency-cf-section
      s-card-border
      
      "
      style={{width:"100%"}}
      
      >
        <img
          className="card-img-top mx-auto d-block" 
         
          src={pic}
          alt="Some random "
        />
        <div className="card-body">
          <p className="card-text">
           {Name}
            <br /> Price :{price}
            <br /> On Stock:{onStock}
             <br /> {Description}
          </p>
        </div>
      </div>
      </Link>
    </>
  
  );
};

export default Card;
