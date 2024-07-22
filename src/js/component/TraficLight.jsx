import React from "react";
import Ligth from "./Ligth";
const TraficLight = () => {
  return (
    <div>
      TraficLight <h1>Imagen de un Semáforo</h1>
      <div className="position-relative">
        <img
          className="position-absolute top-50 start-50 translate-middle-x img-traficLight"
          src="https://pngimg.com/uploads/traffic_light/traffic_light_PNG56238.png"
          alt="Semáforo"
        />
        <Ligth className="position-absolute top-100" />
      </div>
    </div>
  );
};

export default TraficLight;
