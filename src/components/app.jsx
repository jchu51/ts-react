import React from "react";
import Image from "../assest/img/img.jpg";

import "../styles/index.scss";

export default function App() {
  return (
    <div>
      App
      <div className="img" />
      <img src={Image} alt="test"></img>
    </div>
  );
}
