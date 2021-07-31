import React from "react";
import Profile from "./Profile";
import "./ProContainer.css";
const companyNames = [
  "PAYPAL",
  "AMAZON",
  "GOOGLE",
  "NETFLIX",
  "TESLA",
  "CISCO",
];
function ProContainer() {
  return (
    <>
      <div className="container">
        <div className="pro-container">
          {companyNames.map((current) => {
            return <Profile key={current} Name={current} />;
          })}
        </div>
      </div>
    </>
  );
}

export default ProContainer;
