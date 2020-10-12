// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why the nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
/*
It is a principle of javascript that a function can reach outside of its own syntactic, lexical environment to access variables which are not within its own context, but the reverse is not true. That is, objects(variables, functions, information, etc) outside of a function cannot reach into other functions for information, unless that information is specifically returned for use. But a function always has access to those variables and information which are defined within the confines of it's own lexical environment, or in other words, within the curly braces of said function. 
*/

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(num) {
  //creating a variable to store the value of our counter
  let counter = 0;
  //looping for as many times as the number of the variable we enter as a parameter(num)
  for (let i = 0; i <= num; i++) 
  {
    counter = counter + i;
  }
  return counter;
}
console.log(summation(4))