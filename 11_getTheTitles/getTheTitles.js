const getTheTitles = function (arr) {
  const newArr = [];
  arr.forEach((el) => {
    newArr.push(el.title);
  });
  return newArr;

  // OR
  //   return arr.map((book) => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
