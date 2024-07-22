import React, { useState } from "react";

const Ligth = () => {
  let ligthOff = "" ;
  const ligthOn = [ligthOn, setLigthOn] = useState(on);

  

  return (
    <div className="trafic-ligth d-flex align-items-center flex-column">
      <div id="luz-roja" className=" luz"></div>
      <div id="luz-amarilla" className=" luz"></div>
      <div id="luz-verde" className="luz"></div>
    </div>
  );
};
export default Ligth;
