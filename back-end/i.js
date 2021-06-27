const axios = require('axios')
const r = "2021-06-01 08:00:01,(Bomber|122),(-|99),(-|0)";

const _data = [
  "2021-06-25 21:21:34,(-|81),(Gunship|1200),(-|48)",
  "2021-06-25 21:21:35,(-|56),(Gunship|1200),(-|32)",
  "2021-06-25 21:21:36,(-|95),(Gunship|1200),(-|0)",
  "2021-06-25 21:21:37,(-|43),(Gunship|1200),(-|0)",
  "2021-06-25 21:21:38,(-|85),(Gunship|1200),(-|0)",
  "2021-06-25 21:21:39,(-|26),(Gunship|1200),(-|0)",
  "2021-06-25 21:21:40,(-|57),(Gunship|1200),(-|0)",
  "2021-06-25 21:21:41,(-|6),(Gunship|1200),(-|0)",
  "2021-06-25 21:21:42,(Starfighter|103),(Gunship|1200),(-|0)",
  "2021-06-25 21:21:43,(Starfighter|103),(Gunship|1200),(-|0)",
  "2021-06-25 21:21:44,(Starfighter|103),(Gunship|1200),(-|0)",
  "2021-06-25 21:21:45,(Starfighter|103),(Gunship|1200),(-|0)",
  "2021-06-25 21:21:46,(Starfighter|103),(Gunship|1200),(-|0)",
  "2021-06-25 21:21:47,(Starfighter|103),(Gunship|1200),(-|0)",
  "2021-06-25 21:21:48,(Starfighter|103),(Gunship|1200),(-|0)",
  "2021-06-25 21:21:49,(Starfighter|103),(Gunship|1200),(-|0)",
  "2021-06-25 21:21:50,(Starfighter|103),(Gunship|1200),(-|0)",
  "2021-06-25 21:21:51,(Starfighter|103),(Gunship|1200),(-|0)",
  "2021-06-25 21:21:52,(Starfighter|103),(Gunship|1200),(-|0)",
  "2021-06-25 21:21:53,(Starfighter|103),(Gunship|1200),(-|0)",
  "2021-06-25 21:21:54,(Starfighter|103),(Gunship|1200),(-|0)",
  "2021-06-25 21:21:55,(Starfighter|103),(Gunship|1200),(-|0)",
  "2021-06-25 21:21:56,(Starfighter|103),(Gunship|1200),(-|0)",
  "2021-06-25 21:21:57,(Starfighter|103),(Gunship|1200),(-|0)",
  "2021-06-25 21:21:58,(Starfighter|103),(Gunship|1200),(-|0)",
  "2021-06-25 21:21:59,(Starfighter|103),(Gunship|1200),(-|0)",
  "2021-06-25 21:22:00,(Starfighter|103),(Gunship|1200),(-|0)",
  "2021-06-25 21:22:01,(Starfighter|103),(Gunship|1200),(-|0)",
  "2021-06-25 21:22:02,(Starfighter|103),(Gunship|1200),(-|0)",
  "2021-06-25 21:22:03,(Starfighter|103),(Gunship|1200),(-|0)",
  "2021-06-25 21:22:04,(Starfighter|103),(-|12),(-|0)",
  "2021-06-25 21:22:05,(Starfighter|103),(-|8),(-|0)",
  "2021-06-25 21:22:06,(Starfighter|103),(-|6),(-|0)",
  "2021-06-25 21:22:07,(Starfighter|103),(-|69),(-|0)",
  "2021-06-25 21:22:08,(Starfighter|103),(Bomber|103),(-|85)",
  "2021-06-25 21:22:09,(Starfighter|103),(Bomber|103),(-|54)",
  "2021-06-25 21:22:10,(Starfighter|103),(Bomber|103),(-|31)",
  "2021-06-25 21:22:11,(Starfighter|103),(Bomber|103),(-|8)",
  "2021-06-25 21:22:12,(-|41),(Bomber|103),(-|0)",
  "2021-06-25 21:22:13,(-|34),(Bomber|103),(-|0)",
  "2021-06-25 21:22:14,(-|88),(Bomber|103),(-|0)",
  "2021-06-25 21:22:15,(Scout vessel|2000),(Bomber|103),(-|0)",
  "2021-06-25 21:22:16,(Scout vessel|2000),(Bomber|103),(-|0)",
  "2021-06-25 21:22:17,(Scout vessel|2000),(Bomber|103),(-|40)",
  "2021-06-25 21:22:18,(Scout vessel|2000),(Bomber|103),(-|82)",
  "2021-06-25 21:22:19,(Scout vessel|2000),(Bomber|103),(-|50)",
  "2021-06-25 21:22:20,(Scout vessel|2000),(Bomber|103),(-|49)",
  "2021-06-25 21:22:21,(Scout vessel|2000),(Bomber|103),(-|30)",
  "2021-06-25 21:22:22,(Scout vessel|2000),(Bomber|103),(-|77)",
  "2021-06-25 21:22:23,(Scout vessel|2000),(Bomber|103),(-|81)",
  "2021-06-25 21:22:24,(Scout vessel|2000),(Bomber|103),(-|98)",
  "2021-06-25 21:22:25,(-|6),(Bomber|103),(-|40)",
  "2021-06-25 21:22:26,(-|70),(Bomber|103),(-|42)",
  "2021-06-25 21:22:27,(-|65),(Bomber|103),(-|4)",
  "2021-06-25 21:22:28,(-|98),(Bomber|103),(-|31)",
  "2021-06-25 21:22:29,(-|32),(Bomber|103),(-|59)",
  "2021-06-25 21:22:30,(-|68),(Bomber|103),(-|62)",
  "2021-06-25 21:22:31,(-|30),(Bomber|103),(-|67)",
  "2021-06-25 21:22:32,(-|81),(Bomber|103),(-|52)",
  "2021-06-25 21:22:33,(-|32),(Bomber|103),(-|99)"
];

const _init = () => {
  
  // const sensorsTypes = ["Bomber", "StartFigther", "Butterfly", "-"];
  // function randomIntFromInterval(min, max) { // min and max included 
  //   return Math.floor(Math.random() * (max - min + 1) + min)
  // }
  // for(let i =0; i < 100; i++ ){
  //   const getSensor = () => "(" + sensorsTypes[randomIntFromInterval(0,3)] + "|" + randomIntFromInterval(0,1000) + ")"
  //   const str = "2021-06-01 08:00:0" + i +"," + getSensor() + "," + getSensor() + "," + getSensor() ;
  //   console.log(str);
  // }

  // 'http://181.60.155.241:3000/api/battle'
  let index = 0;
  setInterval(() => {
    if(index === _data.length-1){
      index=0;
    }else{
      const _send = _data[index]//_data[index].substr(0, 18) +"" /* index */ + _data[index].substr(19, _data[index].length)
      const url = true ? 'http://181.60.155.241:3000/api/battle' : 'http://192.168.0.15:3000/api/battle'
      // fetch('http://181.60.155.241:3000/api/battle', {method:"POST", headers:{con}})
      axios.default.post(url, JSON.stringify({data: _send}), {headers: {'Content-Type': 'application/json'}})
      console.log('Dbabhed', _send);
      index++;
    }
  }, 1000)
}

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

_init()

// console.log(
//   "splitted", splitted,
//   "data", parsed,
//   _data[1].charAt(18)
//   // "date", date, 
//   // "utilData", parsed
// );
