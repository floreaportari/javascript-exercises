const ftoc = function (degreesFah) {
  let calcTemp = ((degreesFah - 32) * 5) / 9;
  let tempRounded = Math.round(calcTemp * 10) / 10;
  return tempRounded;
};

const ctof = function (degreesCel) {
  let calcTemp = degreesCel * (9 / 5) + 32;
  let tempRounded = Math.round(calcTemp * 10) / 10;
  return tempRounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
