/* function myFunction(name,age){   //=> method one ..
    return {
        name,
        age,
        person(){
            return `my name is ${name} and my age is ${age}`
        }}
        
    }

let person1 = myFunction('nivedhan', 24);
console.log(person1.person()); */


/* function myFunction(name,age){   //=> method two ..
    return {
        name,
        age,
       }   
    }
    let action= {person(){
        return `my name is ${this.name} and my age is ${this.age}`
    }}

    let person1 = myFunction('kumar',25);
    person1.person = action.person;
    console.log(person1.person()); */

   /* function myFunction(name,age){        // => method 3
    let connect = Object.create(action);
    connect.name=name;
    connect.age=age;
    return connect;
   }

   let action = {
    person(){
        return`My name is ${this.name} and my age is ${this.age}`
    }
   }

   let res = myFunction('Nivedhan', 24);
   console.log(res.person()); */



   // we can creatre a multiple objects by using contructor..

/* function Myfunction(name,age){
    this.name=name;
    this.age=age;
    this.person = ()=>{
        return `My name is ${this.name} and my age is ${age}`
    }
}

let res = new Myfunction('nivedhan', 24);
console.log(res.person());
let res1 = new Myfunction('kumar', 24);
console.log(res1.person()); */
