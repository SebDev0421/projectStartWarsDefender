import React, { useEffect } from "react";

import Background from "../components/background/background";
import SpaceShip from "../components/spaceship/spaceship";
/* import { socket } from "../services/socket/socket"; */
 
const HomePage = () => {
  /* useEffect(()=>{
    socket.on("alert", data => {
      console.log(data)
    })
  },[]) */
  return ( 
    <div className="contaier h-screen w-screen">
      <Background />
      <SpaceShip />
    </div>
   );
}
 
export default HomePage;