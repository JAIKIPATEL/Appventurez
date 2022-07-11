

const array = [[1,2],[4,5],[3,4]];
const search = [3,4];
const index = (array, search) => {
    for ( let i = 0; i < array.length; i++) {
        if(JSON.stringify(array[i]) === JSON.stringify(search))
            return i;
    }
    return false;
}
console.log(index(array, search));