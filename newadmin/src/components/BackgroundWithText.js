import React from "react";
import backgroundImage from "../Images/Background.jpg"; // Import your background image

function BackgroundWithText() {
  return (
    <div
      className="background-with-text"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
    </div>
  );
}

export default BackgroundWithText;
