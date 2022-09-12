//spread operator ::::

/* Spread operator allows an iterable to expand in places where 0+ arguments are expected. 
It is mostly used in the variable array where there is more than 1 values are expected.
Spread operator can be used in many cases,like when we want to 
1..expand,
2...copy,
3...concat,
4...with math object.
 Let’s look at each of them one by one:
*/
//1.. expand :

/* let arr1 = ['a','b','c','d']
let arr2 = [...arr1,'e','f']
console.log(arr2);
  */

//2.. copy

/* let arr1 = [1,2,3,4]
let arr2 = [...arr1];
console.log(arr2);

arr1.push(6,7)
console.log(arr2);    changes arr1 but its affected arr2 also like pass by reference.. so we can use spread operator.. 

console.log(arr1); */

//remaining we can see it in the geeksforgeeks