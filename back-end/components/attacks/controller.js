const Model = require('../Model')
const sensrorsDataParser = require('../../middlewares/sensrorsDataParser')

async function getAttacksByPagination(page=0, limit=10){
  const status = {data:[], success=false, date:''}
  await Model.find({})
  .skip(page * limit)
  .limit(limit)
  .exec(function (err, doc) {
      if(err) { status.success = false};
      status.data = sensrorsDataParser(doc.sensorsString).data;
      status.date = doc.date;
  });
  return status
}

module.exports ={
  getAttacksByPagination
}