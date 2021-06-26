const Model = require("../Model");

async function saveDataSensors(originalData, date) {
    const response = {success: true};
		const _data = new Model({sensorsString:originalData, date});
		const saved = await _data.save();
		response.success = saved;
    return response;
}

function compareDataAndSendAlerts(data=[], date='') {
  data.forEach(({name, value}, index) => {
    if(value>100){
      //alerta
    }else{
      //nada
    }
  })
}

module.exports = {
	saveDataSensors,
  compareDataAndSendAlerts
};
