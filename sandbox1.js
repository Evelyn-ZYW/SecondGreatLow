function SecondGreatLow(arr) {
  // let uniNumArray = arr.filter((item, pos) => arr.indexOf(item) == pos);

  //make a new set and spread each value into a new array called uniqueNumArr, with unique numbers
  let uniqueNumArr = [...new Set(arr)];
  //sort the array from small to big
  let sortedArr = uniqueNumArr.sort((a, b) => a - b);
  
  if(sortedArr.length === 2){
    return sortedArr[1] + ' ' + sortedArr[0]
  } else if (sortedArr.length > 2){
    return sortedArr[1] + ' ' + sortedArr[sortedArr.length - 2]
  }
}

console.log(SecondGreatLow([301, 7, 7, 8, 488, 8, 12, 12, 98, 106, 188, 201, 2]));
console.log(SecondGreatLow([7, 8]));