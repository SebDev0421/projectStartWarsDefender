import React, { useEffect } from "react";
import { useContext } from "react";
import { Grid } from "@material-ui/core"; 

import PanelScanner from "../components/panelScanner/PanelScanner";
import PanelControlLeft from "../components/panelControl/PanelControlLeft";
import NavBar from "../components/navbar/Navbar";
import Background from "../components/background/background";
import { socket } from "../services/socket/socket";

import BattleContext from "../context/battle/battleContext";

const HomePage = () => {
  const battleContext = useContext(BattleContext);
  const { alarmEnemy ,sensors, saveSensors } = battleContext;
  useEffect(()=>{
    socket.on("alert", data => {
      saveSensors(data)
      console.log(data)
    })
    //eslint-disable-next-line
  },[])
  return ( 
    <div className="h-screen w-screen m-0 p-0 bg-blue-50  overflow-hidden flex justify-center items-center">
      <Background />
      {console.log('sensors',sensors)}
      <div className="w-11/12 bg-white m-auto rounded-3xl h-5/6 z-10">
        <Grid container spacing={2}>
          <Grid item xs className="h-screen">
          </Grid>
          <Grid item xs={9} className="relative">
            <div className=" h-5/6 rounded-3xl bg-blue-50 flex justify-around flex-col my-1">
              <div className="h-1/5">
                <NavBar />
              </div>
                <PanelScanner />
              <div className="h-1/5">
                <br />
              </div>
            </div>
          </Grid>
          <Grid item xs={2} className="relative">
            <div className="h-5/6 relative">
              <PanelControlLeft status={alarmEnemy} />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
   );
}
 
export default HomePage;