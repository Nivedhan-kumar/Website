// A generators is a process by using that we can pause, resume and we can yield multiple values.. 

/* function* display(){
    j=0;
    while(true){
        j++;
        yield j;
    }
}

function main(data){
    for(i=0;i<10;i++){
        console.log(data.next().value)
    }
}

let obj = display();
main(obj);
main(obj);
main(obj);
let obj2 = display();
main(obj2); */

/* function* gen(){
    yield 2;
    console.log('hello');
    yield 3;
    console.log('good');
    yield 4;
}

let res= gen()
console.log(res.next().value);
console.log(res.next().value);
console.log(res.next().value);
console.log(res.next().value); */
