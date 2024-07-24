import React, { useState } from "react";

const Ligth = () => {
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
      <div className="mt-3 justify-content-around">
        <button
          type="button"
          class="btn btn-outline-danger"
          onClick={() => {
            setColor("redOn");
          }}
        >
          Danger
        </button>
        <button
          type="button"
          class="btn btn-outline-warning"
          onClick={() => {
            setColor("ambarOn");
          }}
        >
          Warning
        </button>
        <button
          type="button"
          class="btn btn-outline-success"
          onClick={() => {
            setColor("greenOn");
          }}
        >
          Success
        </button>
      </div>
      <div>
       
      </div>
    </div>
  );
};
export default Ligth;
