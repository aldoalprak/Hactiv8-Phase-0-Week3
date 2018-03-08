function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
  var store1=1;
  var store2=1;
  for(var i=0;i<arr.length-2;i++){
    if(arr[i+1]-arr[i] == arr[i+2]-arr[i+1]) {
      store1=store1*1
    }else{ 
        store2=store1*0
    }
  }
  if(store1*store2===1) {
    return true;
  }else {
    return false;
  }
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true4
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false3
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true2
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false