function add(num1, num2) {
  //if number2 is not defined ,then it will be applied.that time num2 value 0;
  num2 = num2 || 0;
  return num1 + num2;
}
const result = add(14);
console.log(result);
