import React, { useEffect } from "react";
import { Grid } from "@material-ui/core"; 

import PanelScanner from "../components/panelScanner/PanelScanner";
import PanelControl from "../components/panelControl/PanelControlBottom";
import PanelControlLeft from "../components/panelControl/PanelControlLeft";
import NavBar from "../components/navbar/Navbar";
import { socket } from "../services/socket/socket";


const HomePage = () => {
  useEffect(()=>{
    socket.on("alert", data => {
      console.log(data)
    })
  },[])
  return ( 
    <div className="h-screen w-screen m-0 p-0 bg-white rounded-3xl overflow-hidden">
      <Grid container spacing={2}>
        <Grid item xs className="h-screen">
        </Grid>
        <Grid item xs={9} className="relative h-screen bg-blue-50">
          <div className="h-full rounded-3xl bg-blue-50 flex justify-around flex-col">
            <div className="h-1/5">
              <NavBar />
            </div>
            <PanelScanner />
            <div className="h-1/5">
              <PanelControl />
            </div>
          </div>
        </Grid>
        <Grid item xs={2} className="relative h-screen">
          <div className="h-full relative">
            <PanelControlLeft />
          </div>
        </Grid>
      </Grid>
    </div>
   );
}
 
export default HomePage;