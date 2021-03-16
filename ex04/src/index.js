function compareDifferentValues(m, n) {
  if (m === n) {
    return "equal";
  }
  return "Not equal";
}


console.log(compareDifferentValues(8, "8"));
console.log(compareDifferentValues("8", 8));
console.log(compareDifferentValues('8', 8));
console.log(compareDifferentValues("8", "8"));
console.log(compareDifferentValues(8, 8));
module.exports = compareDifferentValues;
