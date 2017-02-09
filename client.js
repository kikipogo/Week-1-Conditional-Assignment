//create a function to pass in two parameters
function bigOrBigger(a, b){
  //create a conditional to compare inputs and return message
  if(a > b){
  return "The first number was bigger!";
} else if(b > a) {
  return "The second number was bigger!";
} else {
  return "The numbers are the same!";
}
}
//log out bigOrBigger function with said numbers
console.log(bigOrBigger(10, 1));
console.log(bigOrBigger(1, 1));
console.log(bigOrBigger(3,7));
