function isMonotonic(Arr) {
  var increasing = true;
  var decreasing = true;
  for (var i = 0; i < Arr.length - 1; i++) {
    //   console.log(Arr[i],Arr[i+1])
    //   console.log(Arr[i] > Arr[i + 1])
    //   console.log(Arr[i] <Arr[i + 1])
    if (Arr[i] > Arr[i + 1]) {
      increasing = false;
    }
    if (Arr[i] <Arr[i + 1]) {
        decreasing = false;
    }
  }
  return increasing || decreasing;
}

console.log(isMonotonic([4, 3, 3, 1, 1, 5,1]));
console.log(isMonotonic([1,2,2,4]));
console.log(isMonotonic([3,1,2,2]));
console.log(isMonotonic([1,2,3,4]));
console.log(isMonotonic([5,5,2,1,1,0,-1,-5,-4]));
