// The cockroach is one of the fastest insects. Write a function which takes its
// speed in km per hour and returns it in cm per second, rounded down to the integer
// (= floored).
// For example:
// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent)
// and is >= 0. The result should be an Integer.

function cockroachSpeed(s) {
  //takes km/hr
  // multiply s(which is km per hour) * 100000 (which is how many cm in one km)
  //divide new cm by 60
  // divide again by 60
  // return result
  return (s * 100000) / 60 / 60;
}

console.log(cockroachSpeed(5));
