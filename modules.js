/* Modules. JavaScript modules allow you to break up your code into separate files.
 This makes it easier to maintain  */


import display, { person } from "/app.js";

const res = new display("nivedhan", 24);
person(res);


// we have to use the below function in a  separate file...we can extract ...
/* export default class display {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  export function person(res) {
    console.log(`my name is ${res.name}and my age is ${res.age}`);
  } */