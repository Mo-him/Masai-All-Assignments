import React, { useState } from "react";

export default function Profile(prop) {
  const [age, setCount] = useState(prop.age);
  const [show, setShow] = useState(false);
  const [change,setChange] = useState(true);
  const increase = () => {
    setCount(age + 1);
  };

  const decrease = () => {
    setCount(age - 1);
  };

  const showDetails = () => {
      setShow(!show);
      change? document.getElementById("showButton").innerHTML = "Hide Details" :  document.getElementById("showButton").innerHTML = "Show More Details";

      setChange(!change);
  }
  return (
    <>
      <div id="profile">
        <img
          src="https://i.ibb.co/ZYzzwGs/Whats-App-Image-2021-09-21-at-9-30-26-PM-1.jpg"
          alt=""
        />
        <h1>{prop.name}</h1>
        <h2>Age : {age}</h2>
        <button onClick={increase} style={{ backgroundColor: "green" }}>
          INCREASE AGE
        </button>
        <button onClick={decrease} style={{ backgroundColor: "red" }}>
          DECREASE AGE
        </button>
        <button id = "showButton" onClick={showDetails} style={{ backgroundColor: "blue", padding : "12px"}}>
          Show More Details
        </button>
        {
            show? <div>
                 <h2>Location : {prop.location}</h2>
                 <h2>Organistaion : {prop.organ}</h2>
            </div>:null
        }
      </div>
    </>
  );
}
