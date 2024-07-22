import React from "react";
import Ligth from "./Ligth";
const TraficLight = () => {
  return (
    <div>
       <h1>TraficLight</h1>
      <div className="position-relative">
        {/* //<img className="position-absolute top-50 start-50 translate-middle-x img-traficLight" src="https://pngimg.com/uploads/traffic_light/traffic_light_PNG56238.png" alt="Semáforo"        /> */}
        <Ligth />
      </div>
    </div>
  );
};

export default TraficLight;
