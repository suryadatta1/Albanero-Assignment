var singleNumber = function(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    result ^= arr[i];
  }
  return result;
};
//console.log(singleNumber([1, 2, 1]));

var a = [6, 2, 2, 3, 7, 1, 5, 5, 6, 7, 3];
for (var i = 0; i < a.length; i++) {
  for (var j =0; j < a.length; j++) {
    if (a[i] === a[j]) 
    console.log(a[j]);
  }
}
