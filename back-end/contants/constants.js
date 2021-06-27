/**
 * 
 */


class Sensor {
  constructor(id){
    this.enemyShipTimesCounter = 0;
    this.sensor = {sensorId:id,hasEnemyShip:false}
  }
  step(value){
    if(value > 100){
      this.incrementEnemyShipTimesCounter();
    }
  }
  incrementEnemyShipTimesCounter(){
    this.enemyShipTimesCounter = this.enemyShipTimesCounter+ 1;
    if(this.enemyShipTimesCounter){
    }
  }
  clearEnemyShipTimesCounter(){
    this.enemyShipTimesCounter = 0;
  }
}

module.exports = Sensor;

