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


function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log( sumTo(100) );


//The solution using recursion:

function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

console.log( sumTo(100) );
//The solution using the formula: sumTo(n) = n*(n+1)/2:

function sumTo(n) {
  return n * (n + 1) / 2;
}

console.log( sumTo(100) );



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
/*
let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };

// prepend the new value to the list
list = { value: "new item", next: list };
//to remove a value from the middle, change next of the previous one:*/



//By definition, a factorial n! can be written as n * (n-1)!.

//In other words, the result of factorial(n) can be calculated as n multiplied by the result of factorial(n-1). And the call for n-1 can recursively descend lower, and lower, till 1.

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log( factorial(5) ); // 120
//The basis of recursion is the value 1. We can also make 0 the basis here, doesn’t matter much, but gives one more recursive step:

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

console.log( factorial(5) ); // 120

//fibonacci number
//Here are the steps of the new algorithm in details.

//The start:

// a = fib(1), b = fib(2), these values are by definition 1
let a = 1, b = 1;

// get c = fib(3) as their sum
let c = a + b;

/* we now have fib(1), fib(2), fib(3)
a  b  c
1, 1, 2
*/
//Now we want to get fib(4) = fib(2) + fib(3).

//Let’s shift the variables: a,b will get fib(2),fib(3), and c will get their sum:

a = b; // now a = fib(2)
b = c; // now b = fib(3)
c = a + b; // c = fib(4)

/* now we have the sequence:
   a  b  c
1, 1, 2, 3
*/
//The next step gives another sequence number:

a = b; // now a = fib(3)
b = c; // now b = fib(4)
c = a + b; // c = fib(5)

/* now the sequence is (one more number):
      a  b  c
1, 1, 2, 3, 5
*/
//…And so on until we get the needed value. That’s much faster than recursion and involves no duplicate computations.



function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log( fib(10) ); // 55
console.log( fib(15) ); // 610
//The loop starts with i=3, because the first and the second sequence values are hard-coded into variables a=1, b=1.

//loop based 
let list1 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list1) {
  let tmp = list1;

  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }

}

printList(list1);
//Please note that we use a temporary variable tmp to walk over the list. Technically, we could use a function parameter list instead:
/*
function printList(list) {

  while(list) {
    console.log(list.value);
    list = list.next;
  }

}
*/
// recursive way
//The recursive variant of printList(list) follows a simple logic: to output a list we should output the current element list, then do the same for list.next:
let list2 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};



//The recursive logic 

//We need to first output the rest of the list and then output the current one:

let list3= {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printReverseList(list3) {

  if (list3.next) {
    printReverseList(list3.next);
  }

  console.log(list3.value);
}

printReverseList(list3);