// session storage :::::::
/* we can store data max 2mb
once window get closed the data will get delete.
we cant use anyother brower... we have to use in the same browser. */

/* sessionStorage.setItem('name','nivedhan');
sessionStorage.setItem('mbl','samsung'); */

/* let res= sessionStorage.getItem('name');
console.log(res);
sessionStorage.removeItem('name') */


//local storage :::::::::

/* data won't delete if the window get closed.
max 10mb size */

/* localStorage.setItem('name','vijay');
let res = localStorage.getItem('name');
console.log(res);
localStorage.removeItem('name') */


//cookies
// for tracking
// session management 
// we have to delete manually or we can set expiry time.
//data wont delete
// 4kb size

let expires = new Date(2022,11, 20).toUTCString();

document.cookie= 'name=nivedhan; expires='+expires;