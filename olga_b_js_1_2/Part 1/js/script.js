var a = prompt('Number', '');
var b = prompt("Power", '');
function pow(a, b){
  var result = 1;
if (b >= 0) {
  for (i = 0; i < b; i++) {
     result = a * result;
  }
} else {
  for (i = b; i < 0; i++) {
     result = a * result;
  }
  result = 1/result;
}
  return result;
}

console.log(pow(a, b));