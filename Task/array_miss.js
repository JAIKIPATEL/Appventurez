
//Function to get the missing number
function getMissingNo(a, n) {
    let total = Math.floor(n * (n + 1) /2);
	for (let i = 0; i < n; i++)
		total -= a[i];
    return total;
}

let arr = [4,3,1,0,5];
let n = arr.length;
let miss = getMissingNo(arr, n);
console.log(miss);















/*
    
    occurence of array element
    let lengths = ['a', 'ball', 'cat', 'a', 'b', 'b'].map(item => item.length);
console.log(lengths)


const occurrences =['a', 'b', 'c', 'a', 'b', 'b'].reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
  }, {});

  console.log(occurrences)
  





  const arr1 = [[1,2],[4,5],[3,4]];
  //console.log(arr.indexOf('[3,4]'));
 console.log(arr.findIndex(arr => arr.name == '[3,4]')); 





const arr = ['a', 'b', 'c', 'a', 'b', 'b'];
const count = {};
for ( index = 0; index < arr.length; index++) {
  const element = arr[index];
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}
console.log(count);
*/