const fibonacci = function (n) {
  if (n < 0) {
    return "OOPS";
  }
  if (n === 0) {
    return 0;
  }

  const init = [0, 1];
  for (let i = 1; i < n; i++) {
    init.push(init[i - 1] + init[i]);
  }

  return init[init.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
