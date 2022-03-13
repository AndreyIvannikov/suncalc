import SunCalc from "suncalc";
const currentSunCalc = (latitude, longitude) => {
  return SunCalc.getTimes(new Date(), latitude, longitude);
};
export default currentSunCalc;
