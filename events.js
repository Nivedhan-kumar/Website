function onKey(e){
    console.log('run');
}

function ondoor(e){
    if(e.keyCode===13)
    console.log(e.target.value)
}


// method .. 1
 const res=document.getElementById('txt')
//res.onkeydown=onKey; 


// method 2.... by using the below we can declare two events for the same field.. 
//res.addEventListener('mouseover',onKey);
res.addEventListener('keyup',ondoor);