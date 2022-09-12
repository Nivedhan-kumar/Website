// class

/* class Display{
    constructor (name,age){
        this.name=name;
        this.age=age;
    }
        person(){
            return `my name is ${this.name} and my age is ${this.age}`
        }
    }

    let obj = new Display('nivedhan',24);
    console.log(obj.person()); */

    //Inheritance :

    class Display1{
        constructor(boys,girls) {
            this.boys=boys;
            this.girls= girls;
            }
            result(){
                return `Number of boys are ${this.boys} and number of girls are ${this.girls}` 
        }
    }

    class Display2 extends Display1{
        constructor(boys,girls,staffs,non_tea){
            super(boys,girls)
        this.staffs=staffs;
        this.non_tea=non_tea;
        
    }
        main(){
            return`${super.result()}. The number of staffs are ${this.staffs} and number of non teaching staffs are ${this.non_tea}`
        }
}

let obj = new Display2(5,6,5,4);
console.log(obj.main());