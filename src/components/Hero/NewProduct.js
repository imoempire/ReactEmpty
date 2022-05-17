import React from "react";
import Slider from "../Other/Slider";
import "./new.css";



const NewProduct = () => {

  return (
    <div className="container row">
      <div className="slide title">
        <h1>
          NEW <span style={{ color: "#670F3B" }}>BOOKS</span>
        </h1>
      </div>
      <div style={{width: '100%'}}>
      <Slider/>
      </div>
    </div>
  );
};

export default NewProduct;
