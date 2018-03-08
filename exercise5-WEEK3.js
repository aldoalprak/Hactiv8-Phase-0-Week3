function palindrome(kata) {
  // you can only write your code here!
  var store1='';
  var store2='';
  for(var i=0;i<kata.length;i++) {
    store1+=kata[i]
  }
  for(var j=kata.length-1;j>=0;j--) {
    store2+=kata[j];
  }
  if(store1==store2){
    return true;
  }else {
    return false;
  }
}


// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false