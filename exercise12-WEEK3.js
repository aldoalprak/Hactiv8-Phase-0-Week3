
function tentukanDeretGeometri(arr) {
  // you can only write your code here!
  var store1=1;
  var store2=1;
  for(var i=0;i<arr.length-2;i++) {
    if(arr[i+1]/arr[i]===arr[i+2]/arr[i+1]){
      store1*=1;
    }else {
      store2*=0;
    }
  }

  if(store1*store2===1) {
    return true
  }else {
    return false;
  }
}


// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false