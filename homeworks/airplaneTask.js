const AirPlane = {
  isFlying: false,
};
Object.defineProperties(AirPlane, {
  init: {
    value: () => {
      AirPlane.name = "Boeing";
      return AirPlane;
    },
  },
  takeOff: {
    value: () => {
      AirPlane.isFlying = true;
      return AirPlane.isFlying;
    },
  },
  land: {
    value: () => {
      AirPlane.isFlying = false;
      return AirPlane.isFlying;
    },
  },
});
// console.log(AirPlane.init());
console.log(AirPlane.land())
