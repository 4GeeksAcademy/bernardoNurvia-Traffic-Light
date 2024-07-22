import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import TraficLight from "./TraficLight";
import Ligth from "./Ligth";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
		<TraficLight/>
		
		</div>
	);
};

export default Home;
