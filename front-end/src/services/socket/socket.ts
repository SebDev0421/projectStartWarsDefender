import socketClientIO from "socket.io-client";
import config from "../../config/config";

const url = config.api.hostname;
console.log(url)
export const socket = socketClientIO(`${url}`,{
  transports:['websocket','polling', 'flashsocket']
});