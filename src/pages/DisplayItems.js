import React, { useState } from "react";
import { Routes,Route, useNavigate } from "react-router-dom";

function DisplayItems({ image, name, id, rate }) {
  const navigate = useNavigate();
  const[dat,setDat]=useState("")
  return (
    <div className="projectItem">
      <img src={image} className="bgImage" />
      <h1> Name: {name} </h1>
      <h1> Rating: {rate} </h1>

      <div>
        <button className="but"
          onClick={() => {
            navigate("/moviesdetail/" + id);
            // setDat(id)
          }}
        >
          Book Tickets{" "}
        </button>
      </div>
    </div>
  );
}

export default DisplayItems;
