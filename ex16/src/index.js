function checkSign(num){
   return (num === 0) ? "Zero"
        : (num < 0) ? "Negative"
        : "Positive";
}



console.log(checkSign(10));
console.log(checkSign(-12));
console.log(checkSign(0));
module.exports = checkSign;
