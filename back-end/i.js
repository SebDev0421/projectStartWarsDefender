const axios = require('axios');

const __data= [
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

const _data = [
  "2021-06-25 21:21:34,(Bomber|300),(Bomber|300),(Bomber|300),(-|34),(-|86),(-|80),(-|28),(-|26),(-|44),(-|91)",
  "2021-06-25 21:21:35,(Bomber|300),(Bomber|300),(Bomber|300),(-|57),(-|68),(-|89),(-|52),(-|72),(-|92),(-|78)",
  "2021-06-25 21:21:36,(Bomber|300),(Bomber|300),(Bomber|300),(-|11),(-|92),(-|61),(-|47),(-|71),(-|19),(-|33)",
  "2021-06-25 21:21:37,(Bomber|300),(Bomber|300),(Bomber|300),(-|84),(-|24),(-|50),(-|15),(-|50),(-|17),(-|39)",
  "2021-06-25 21:21:38,(Bomber|300),(Bomber|300),(Bomber|300),(-|39),(-|37),(-|27),(-|12),(-|7),(-|16),(-|18)",
  "2021-06-25 21:21:39,(Bomber|300),(Bomber|300),(Bomber|300),(-|95),(-|7),(-|92),(-|46),(-|99),(-|62),(-|65)",
  "2021-06-25 21:21:40,(Bomber|300),(Bomber|300),(Bomber|300),(-|41),(-|10),(-|10),(-|81),(-|79),(-|36),(-|2)",
  "2021-06-25 21:21:41,(Bomber|300),(Bomber|300),(Bomber|300),(-|37),(-|47),(-|26),(-|46),(-|77),(-|60),(-|41)",
  "2021-06-25 21:21:42,(Bomber|300),(Bomber|300),(Bomber|300),(-|29),(-|99),(-|40),(-|36),(-|23),(-|59),(-|57)",
  "2021-06-25 21:21:43,(Bomber|300),(Bomber|300),(Bomber|300),(-|9),(-|14),(-|37),(-|62),(-|89),(-|20),(-|92)",
  "2021-06-25 21:21:44,(Bomber|300),(Bomber|300),(Bomber|300),(-|23),(-|62),(-|49),(-|18),(-|41),(-|70),(-|16)",
  "2021-06-25 21:21:45,(Bomber|300),(Bomber|300),(Bomber|300),(-|93),(-|91),(-|38),(-|91),(-|67),(-|27),(-|53)",
  "2021-06-25 21:21:46,(Bomber|300),(Bomber|300),(Bomber|300),(-|90),(-|12),(-|61),(-|19),(-|93),(-|42),(-|30)",
  "2021-06-25 21:21:47,(Bomber|300),(Bomber|300),(Bomber|300),(-|68),(-|56),(-|68),(-|34),(-|61),(-|32),(-|72)",
  "2021-06-25 21:21:48,(Bomber|300),(Bomber|300),(Bomber|300),(-|74),(-|77),(-|63),(-|46),(-|45),(-|79),(-|18)",
  "2021-06-25 21:21:49,(Bomber|300),(Bomber|300),(Bomber|300),(-|42),(-|38),(-|85),(-|26),(-|12),(-|86),(-|17)",
  "2021-06-25 21:21:50,(Bomber|300),(Bomber|300),(Bomber|300),(-|39),(-|62),(-|91),(-|3),(-|1),(-|91),(-|85)",
  "2021-06-25 21:21:51,(Bomber|300),(Bomber|300),(Bomber|300),(-|95),(-|3),(-|97),(-|77),(-|59),(-|81),(-|96)",
  "2021-06-25 21:21:52,(Bomber|300),(Bomber|300),(Bomber|300),(-|91),(-|74),(-|96),(-|34),(-|4),(-|40),(-|10)",
  "2021-06-25 21:21:53,(Bomber|300),(Bomber|300),(Bomber|300),(-|93),(-|71),(-|17),(-|79),(-|87),(-|58),(-|56)",
  "2021-06-25 21:21:54,(Bomber|300),(Bomber|300),(Bomber|300),(-|76),(-|82),(-|69),(-|9),(-|63),(-|45),(-|13)",
  "2021-06-25 21:21:55,(Bomber|300),(Bomber|300),(Bomber|300),(-|4),(-|91),(-|12),(-|87),(-|52),(-|92),(-|58)",
  "2021-06-25 21:21:56,(Bomber|300),(Bomber|300),(Bomber|300),(-|91),(-|72),(-|1),(-|8),(-|23),(-|86),(-|52)",
  "2021-06-25 21:21:57,(Bomber|300),(Bomber|300),(Bomber|300),(-|10),(-|40),(-|67),(-|6),(-|90),(-|26),(-|41)",
  "2021-06-25 21:21:58,(Bomber|300),(Bomber|300),(Bomber|300),(-|98),(-|23),(-|75),(-|47),(-|19),(-|29),(-|54)",
  "2021-06-25 21:21:59,(Bomber|300),(Bomber|300),(Bomber|300),(-|64),(-|94),(-|95),(-|20),(-|53),(-|29),(-|17)",
  "2021-06-25 21:22:00,(Bomber|300),(Bomber|300),(Bomber|300),(-|66),(-|81),(-|48),(-|69),(-|24),(-|75),(-|75)",
  "2021-06-25 21:22:01,(Bomber|300),(Bomber|300),(Bomber|300),(-|44),(-|57),(-|89),(-|6),(-|57),(-|79),(-|32)",
  "2021-06-25 21:22:02,(Bomber|300),(Bomber|300),(Bomber|300),(-|70),(-|37),(-|29),(-|99),(-|97),(-|60),(-|42)",
  "2021-06-25 21:22:03,(Bomber|300),(Bomber|300),(Bomber|300),(-|99),(-|7),(-|70),(-|98),(-|56),(-|62),(-|40)",
  "2021-06-25 21:22:04,(-|3),(-|13),(-|88),(-|32),(-|31),(-|29),(-|29),(-|36),(-|84),(-|90)",
  "2021-06-25 21:22:05,(-|9),(-|67),(-|49),(-|2),(-|93),(-|76),(-|81),(-|16),(-|26),(-|24)",
  "2021-06-25 21:22:06,(-|15),(-|82),(-|38),(-|79),(-|56),(-|31),(-|66),(-|49),(-|36),(-|37)",
  "2021-06-25 21:22:07,(-|88),(-|56),(-|2),(-|99),(-|57),(-|75),(-|47),(-|5),(-|76),(-|25)",
  "2021-06-25 21:22:08,(-|91),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(-|59),(-|96)",
  "2021-06-25 21:22:09,(-|40),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(-|4),(-|34)",
  "2021-06-25 21:22:10,(-|92),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(-|23),(-|31)",
  "2021-06-25 21:22:11,(-|53),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(-|9),(-|79)",
  "2021-06-25 21:22:12,(-|24),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(-|87),(-|83)",
  "2021-06-25 21:22:13,(-|7),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(-|21),(-|56)",
  "2021-06-25 21:22:14,(-|81),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(-|68),(-|18)",
  "2021-06-25 21:22:15,(-|73),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(-|79),(-|88)",
  "2021-06-25 21:22:16,(-|79),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(-|9),(-|8)",
  "2021-06-25 21:22:17,(-|16),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(-|94),(-|54)",
  "2021-06-25 21:22:18,(-|91),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(-|64),(-|50)",
  "2021-06-25 21:22:19,(-|25),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(-|18),(-|15)",
  "2021-06-25 21:22:20,(-|22),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(-|97),(-|24)",
  "2021-06-25 21:22:21,(-|44),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(-|89),(-|91)",
  "2021-06-25 21:22:22,(-|89),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(-|23),(-|79)",
  "2021-06-25 21:22:23,(-|33),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(-|17),(-|96)",
  "2021-06-25 21:22:24,(-|15),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(-|66),(-|50)",
  "2021-06-25 21:22:25,(-|98),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(-|50),(-|41)",
  "2021-06-25 21:22:26,(-|79),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(-|67),(-|31)",
  "2021-06-25 21:22:27,(-|9),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(-|94),(-|12)",
  "2021-06-25 21:22:28,(-|45),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(-|89),(-|3)",
  "2021-06-25 21:22:29,(-|73),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(-|5),(-|1)",
  "2021-06-25 21:22:30,(-|76),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(-|19),(-|26)",
  "2021-06-25 21:22:31,(-|22),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(-|54),(-|7)",
  "2021-06-25 21:22:32,(-|35),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(-|75),(-|29)",
  "2021-06-25 21:22:33,(-|99),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(Starfighter|1240),(-|8),(-|90)"

];

const _init = () => {
  let index = 0;
  const r = setInterval(() => {
    const usedArray = _data;
    if(index === usedArray.length-1){
      index=0;
      clearInterval(r);
      console.log('<---------Frenar acá-------->');
    }else{
      const _send = usedArray[index]//_data[index].substr(0, 18) +"" /* index */ + _data[index].substr(19, _data[index].length)
      const url = 'http://192.168.0.15:3000/api/battle'
      const urlS = 'http://181.60.155.241:3000/api/battle'
      axios.default.post(urlS, JSON.stringify({data: _send}), {headers: {'Content-Type': 'application/json'}})
      // axios.default.post(url, JSON.stringify({data: _send}), {headers: {'Content-Type': 'application/json'}})
      console.log('-->', _send);
      index++;
    }
  }, 1000)
}

_init()
