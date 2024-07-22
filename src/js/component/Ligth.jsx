import React, { useState } from "react";

const Ligth = () => {
  const colors = ["red", "amber", "green", "purple"];

  const [color, setColor] = useState("red");

  return (
    <div className="container">
      <div className="trafic-ligth d-flex align-items-center flex-column">
        <div
          id="red"
          className={`luz ${color === "redOn" ? "redOn" : "red"}`}
          onClick={() => {
            setColor("redOn");
          }}
        ></div>
        <div
          id="ambar"
          className={`luz ${color === "ambarOn" ? "ambarOn" : "ambar"}`}
          onClick={() => {
            setColor("ambarOn");
          }}
        ></div>
        <div
          id="green"
          className={`luz ${color === "greenOn" ? "greenOn" : "green"}`}
          onClick={() => {
            setColor("greenOn");
          }}
        ></div>
      </div>
      <div className="">
        <button type="button" class="btn btn-outline-danger">
          Danger
        </button>
        <button type="button" class="btn btn-outline-warning">
          Warning
        </button>
        <button type="button" class="btn btn-outline-success">
          Success
        </button>
      </div>
    </div>
  );
};
export default Ligth;
