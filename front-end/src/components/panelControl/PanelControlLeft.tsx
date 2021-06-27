import React from "react";
import "./panelControlLeft.css";
import { Typography } from "@material-ui/core";
import { Divider} from "@material-ui/core";

const PanelControlLeft = () => {
  return (
    <div className="px-2 flex justify-around flex-col h-full">
      <div className="flex flex-col justify-around justify-center items-center">
        <Typography variant="h4" className="my-5">alertas</Typography>
        <div className="w-44 h-44 ounded-full flex items-center justify-center circle-alerts">
          <p>2</p>
        </div>
      </div>
      <Divider />
      <div>
      <Typography variant="h4" className="my-5 mb-20">acciones</Typography>
        <div className="bg-blue-400 flex justify-between rounded-3xl p-5 my-2">
          <div className="flex flex-col items-center my-auto">
            <h3 className="text-3xl">Error de Sensores</h3>
          </div>
          <div className="mt-2 relative ">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        <div className="bg-blue-400 flex justify-between rounded-3xl p-5 my-2">
          <div className="flex flex-col items-center my-auto">
            <h3 className="text-3xl">Error de Sensores</h3>
          </div>
          <div className="mt-2 relative ">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        <div className="bg-blue-400 flex justify-between rounded-3xl p-5 my-2">
          <div className="flex flex-col items-center my-auto">
            <h3 className="text-3xl">Error de Sensores</h3>
          </div>
          <div className="mt-2 relative ">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PanelControlLeft;