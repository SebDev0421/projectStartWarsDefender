const r = "2021-06-01 08:00:01,(Bomber|122),(-|99),(-|0)";
const splitted = r.split(",");
const parsed = {data:[], date:''}
const ip = require("ip")
splitted.forEach((data, index)=> {
  if(index ===0){
    parsed.date = data
  }else{
    const aditionalDataRemoved = data.replace(/[{()}]/g, "")
    const [sensorName, sensorValue] = aditionalDataRemoved.split("|")
    parsed.data.push({name:sensorName, value:sensorValue})
  }
})


console.log(
  "splitted", splitted,
  "data", parsed,
  ip.address()
  // "date", date, 
  // "utilData", parsed
);
