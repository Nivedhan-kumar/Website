let a = 1;
let b = 2;

display1=()=>{
    return new Promise((resolve, reject) => {
         if(a===b){(setTimeout(()=>{
            resolve('1st message') 
        },3000) )}else{
            reject('1st failed')
        }
    })
}

display2=()=>{
   return  new Promise((resolve, reject) => {
    if(a!==b){
         (setTimeout(()=>{
            resolve('2nd message') 
        },2000) )}else{
        reject('2nd failed')
        }
    })
}
/* display3=()=>{
console.log('3rd message') 
} */

async function main(){
    try{
    let res1 = await display1();
    console.log(res1);}
    catch(err){
        console.log(err)
    }
    try{
        let res2 = await display2();
        console.log(res2);}
        catch(err1){
            console.log(err1)
        }
}
main();