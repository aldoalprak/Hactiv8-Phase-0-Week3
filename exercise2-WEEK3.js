//input "hello world!"
//output "!dlrow olleh"

var input='hello world!';
var store='';
for(var i=input.length-1;i>=0;i--) {
  store+=input[i];
}
console.log(store);