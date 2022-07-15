const removeFromArray = function (arr, ...value) {
  return arr.filter((num) => {
    return !value.includes(num);
  });
};

// Do not edit below this line
module.exports = removeFromArray;
