const ftoc = function (degreesFah) {
  let calc = ((degreesFah - 32) * 5) / 9;
  let resultRounded = Math.round(calc * 10) / 10;
  return resultRounded;
};

const ctof = function (degreesCel) {
  let calc = degreesCel * (9 / 5) + 32;
  let resultRounded = Math.round(calc * 10) / 10;
  return resultRounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
