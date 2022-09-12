// currying using bind method...

/* function display(x,y){
    console.log(x*y)
}

let res = display.bind(this, 2);
res(4);

let res1 = display.bind(this, 5);
res1(4); */

//currying using closure.. 

/* function display1(x){
    return function(y){
        return function(z){
            return x*y*z;
        }
    }
}

console.log((display1(1)(2)(3))); */