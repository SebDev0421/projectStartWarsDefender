import React from "react";
import { useContext } from "react";
import "./panelControlLeft.css";
import { Typography } from "@material-ui/core";
import { Divider} from "@material-ui/core";
import { When } from "react-if";
import _ from "lodash";

import BattleContext from "../../context/battle/battleContext";

const PanelControlLeft = ({ status }: any ) => {
  const battleContext = useContext(BattleContext);
  const { sensors, alarmSensor  } = battleContext;
  let statusCircle = status && !alarmSensor ? "status-bad ": !status && alarmSensor ? "status-report" : "status-ok"; 
  return (
    <div className="px-2 flex justify-around flex-col h-full">
      <div className="flex flex-col justify-center items-center h-2/6">
        <div className="mt-5">
          <Typography variant="h4">Estado</Typography>
        </div>
        <div className={`${statusCircle} rounded-full flex items-center justify-center circle-alerts mt-2 mb-2`}>
        </div>
      </div>
      <Divider />
      <div className="h-4/6">
        <Typography variant="h4" className="my-5 mb-20">Alertas</Typography>
          <div className="container-alert-cards">
          <When condition={!(_.isEmpty(sensors))}>
          {!(_.isEmpty(sensors)) && sensors.map((alert:any,index:any)=>(
            <div className={`${alert.type === '1' ? "status-bad" : "status-report"} bg-blue-400 flex justify-between rounded-3xl p-5 my-2`} key={index}>
              <div className="flex flex-col items-center my-auto">
                <h3 className="text-lg">Alerta {alert.date}</h3>
                {alert.type === '1' ? (
                  <p className="text-base">Se detecto {alert.ship} en el sensor {alert.index}</p>
                ) : (
                  <p className="text-base">
                    Se detecto una falla en el sensor {alert.index} 
                  </p>
                )}
                
              </div>
            </div>
          ))}
        </When>
        </div>
      </div>
    </div>
  )
}

export default PanelControlLeft;