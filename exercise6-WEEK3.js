function angkaPalindrome(num) {
  // you can only write your code here!
  
  var store1='x';
  var store2='y';
  
  
  while(store1!==store2){
  
    store1='';
    store2='';
    
    num+=1;
    var numToString2= num.toString();
    for(var k=0;k<numToString2.length;k++) {
    store1+=numToString2[k];
  }
   for(var l=numToString2.length-1;l>=0;l--) {
    store2+=numToString2[l];
  }
    
  }
  return(store1);
  
}


// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001*/