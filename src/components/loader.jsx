import React from "react";
import Loader from "react-loader-spinner";
import "./style.css";
export default function LoaderArea() {
  return (
    <div className="loader-area">
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={10000}
      />
    </div>
  );
}
