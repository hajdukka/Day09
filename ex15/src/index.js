function myDoWhile() {
  var myNumbers = "";
  var i = 0;
  do {
    myNumbers += i;
    i++;
    if (i <= 9) {
        myNumbers += ", ";
      };
  } while (i <= 9);
  

  return myNumbers;
}

console.log(myDoWhile());
module.exports = myDoWhile;
