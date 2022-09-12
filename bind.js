let obj1={
    a:'hello',
    fun: function (){
       console.log(`Hi dear ${this.b}`)
    }
}

let obj2={
   b:'gud aft'
}

let res=obj1.fun.bind(obj2);   // it will return function so we can store it in variable...we can use comma to pass additional aruguments.

res();  

obj1.fun.call(obj2) // we can directly print the value.. we can use comma to pass additional aruguments.

obj1.fun.apply(obj2)  // if we want to pass any other value as an argument means we have to use array brackets..