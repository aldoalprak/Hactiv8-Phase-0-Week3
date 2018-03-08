function targetTerdekat(arr) {
  // you can only write your code here!
  var storeO=0;
  var storeX=0;
  var arrayBaru=[];
  for(var i=0;i<arr.length;i++) {
    if(arr[i]==='o') {
      storeO=i;
    }
  }
  
  for(var j=0;j<arr.length;j++) {
    if(arr[j]==='x') {
      
      storeX=j;
      arrayBaru.push(Math.abs(storeO-storeX));
      storeX=0;
      
    }
  }
  var terdekat=arrayBaru.sort(function(a,b){return a-b});
  return arrayBaru[0] || 0;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2