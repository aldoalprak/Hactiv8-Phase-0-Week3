function pasanganTerbesar(num) {
  // you can only write your code here!
  var numToString=num.toString();
  var arr=[];
  for(var i=0;i<numToString.length-1;i++) {
    var angkaString = numToString[i] +numToString[i+1];
    var StringToAngka= parseInt(angkaString); 
    arr.push(StringToAngka);
  }

 arr.sort(function(a,b){return(b-a)});
 return(arr[0]);
}



// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99