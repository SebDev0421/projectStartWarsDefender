import React from "react";
import useRadar from "../radar/Radar";

const PanelControl = () => {
  useRadar(); 
  return (
    <div className="flex justify-around h-full">
      <div className="rounded-3xl w-1/3 bg-white h-full flex justify-center">
        <div id="div-radar">
        </div>
      </div>
      <div className="rounded-3xl w-1/3 bg-white h-full">
        <h2>Segundos datos</h2>
      </div>
    </div>
  )
};

export default PanelControl;