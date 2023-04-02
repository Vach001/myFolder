function Car(model, milesPergallon) {
  this.model = model;
  this.milesPergallon = 0;
  this.tank = 0;
  this.odometer = 0;
}
Car.prototype.fill = function (gallon) {
  this.tank += gallon;
};
Car.prototype.drive = function (distance) {
  let oneLitrDistance = 100 / this.milesPergallon;
  if (this.tank > distance / oneLitrDistance) {
    return `there isn't enough fuel`
  }
  this.odometer += distance;
  this.tank -= distance / this.milesPergallon;
  return `I ran out of fuel at ${distance} miles!"`;
};


