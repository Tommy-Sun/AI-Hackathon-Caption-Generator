import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CaptionForm from "./CaptionForm";

export enum CaptionTypes {
  NEWOFFER = "New Offer",
  NEWEVENT = "New Event",
  OURVALUES = "Our Values As An Organisation",
}

function App() {
  const [captionTypeSelected, setCaptionTypeSelected] = useState(
    CaptionTypes.NEWOFFER
  );
  console.log(captionTypeSelected);
  return (
    <div className="App">
      <h2 className="header">What Kind Of Caption Are You Posting?</h2>
      <div className="container">
        <select
          onChange={(event) =>
            setCaptionTypeSelected(event.target.value as CaptionTypes)
          }
        >
          {Object.values(CaptionTypes).map((captionType, index) => (
            <option key={index}>{captionType}</option>
          ))}
        </select>
      </div>
      <div className="container">
        <CaptionForm captionType={captionTypeSelected} />
      </div>
    </div>
  );
}

export default App;
