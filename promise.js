display1=()=>{
    return new Promise((resolve, reject) => {
         (setTimeout(()=>{
            resolve('1st message') 
        },3000) )
    })
}

display2=()=>{
   return  new Promise((resolve, reject) => {
         (setTimeout(()=>{
            resolve('2nd message') 
        },2000) )
    })
}
display3=()=>{
   return new Promise((resolve, reject) => {
         (setTimeout(()=>{
            resolve('3rd message') 
        },1000) )
    })
}

/* Promise.all([
    display1().then((data)=> console.log(data)),
    display2().then((data1)=> console.log(data1)),
    display3().then((data2)=> console.log(data2))
])
 */
/* display1()
.then((data)=>{
    console.log(data);
})
    .then(()=>{
        display2()
        .then((data1)=>{
            console.log(data1)
        })
            .then(()=>{
                display3().then((data2)=>{
                    console.log(data2);
                })
            })
        })
 */

        //using catch method :

 /*        let a=4;
let b=4;

display1=(a,b)=>{
    return new Promise((resolve, reject)=>{
        if(a!=b){
        resolve ('message sent')}else{
            reject('message failed')
        }
    })
}

display1().then((data)=>{
    console.log(data);
}).catch((data1)=>{
    console.log(data1);
}) */