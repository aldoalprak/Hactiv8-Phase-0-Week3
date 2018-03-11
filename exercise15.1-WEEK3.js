function groupAnimals(animals) {
  // you can only write your code here!
  var newArr=[];
  animals.sort();
  for(var i=0;i<animals.length;i++) {
    if(i ===0) {
      newArr.push([animals[i]])
    } else if(i !== 0) {
      if (animals[i][0]===animals[i-1][0]) {
        newArr[newArr.length-1].push(animals[i]);
      }else {
        newArr.push([animals[i]]);
      }
    }
  }
  return newArr;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]