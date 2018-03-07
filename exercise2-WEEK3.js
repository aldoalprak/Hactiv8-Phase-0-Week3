//input "hello world!"
//output "!dlrow olleh"
function balikString(input) {

var store='';
for(var i=input.length-1;i>=0;i--) {
  store+=input[i];
}
console.log(store);
}

var input='hello world!';
balikString(input);