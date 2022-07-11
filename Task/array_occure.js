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