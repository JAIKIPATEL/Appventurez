function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
  }

  console.log( pow(2, 3) ); // 8
/*
Please note how the recursive variant is fundamentally different.

When pow(x, n) is called, the execution splits into two branches:

            if n==1  = x
           /
pow(x, n) =
           \
            else     = x * pow(x, n - 1)
            */

            // one more way 
            function pow(x, n) {
                return (n == 1) ? x : (x * pow(x, n - 1));
              }


              /*As we can see, when our function gets a department to sum, there are two possible cases:

    Either it’s a “simple” department with an array of people – then we can sum the salaries in a simple loop.
    Or it’s an object with N subdepartments – then we can make N recursive calls to get the sum for each of the subdeps and combine the results.

The 1st case is the base of recursion, the trivial case, when we get an array.

The 2nd case when we get an object is the recursive step. A complex task is split into subtasks for smaller departments. They may in turn split again, but sooner or later the split will finish at (1).

The algorithm is probably even easier to read from the code:
*/
let company = { // the same object, compressed for brevity
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

// The function to do the job
function sumSalaries(department) {
  if (Array.isArray(department)) { // case (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
  } else { // case (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
    }
    return sum;
  }
}

console.log(sumSalaries(company)); // 7700


//linked list
//Alternatively, if we really need fast insertion/deletion, we can choose another data structure called a linked list.

//The linked list element is recursively defined as an object with:

   // value.
    //next property referencing the next linked list element or null if that’s the end.

let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
list.next.next.next.next = null;
//The list can be easily split into multiple parts and later joined back:

let secondList = list.next.next;
list.next.next = null;
//To join:

list.next.next = secondList;

//And surely we can insert or remove items in any place.

//For instance, to prepend a new value, we need to update the head of the list:

let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };

// prepend the new value to the list
list = { value: "new item", next: list };
//to remove a value from the middle, change next of the previous one:
list.next = list.next.next;