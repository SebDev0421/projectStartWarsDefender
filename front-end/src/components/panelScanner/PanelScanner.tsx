import React from "react";


import Background from "../background/background";
import SpaceShip from "../spaceship/spaceship";

const PanelScanner = () => {
  return (
    <div className="h-2/4 py-10 px-20 relative bg-blue-50">
      <div className="h-full rounded-3xl relative">
        <Background />
        <SpaceShip />
      </div>
    </div>
  )
}
export default PanelScanner;