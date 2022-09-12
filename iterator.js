let arr1=[1,2,3,4,5];
//console.log(arr1[Symbol.iterator]())
/* let res = arr1[Symbol.iterator]();
console.log(res.next())
console.log(res.next())
console.log(res.next())
console.log(res.next())
console.log(res.next())
console.log(res.next()) */

arr1[Symbol.iterator] = function(){
    return {
        next: function(){
            return {
            done:false,
            value:10
            
        }
    }
}
}
let res = arr1[Symbol.iterator]();
console.log(res.next());