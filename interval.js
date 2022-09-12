function output(){

    let x= document.getElementById("para"); 
    let tm = new Date();
    let tm1 = tm.getHours()
    let tm2 = tm.getMinutes();
    let tm3 = tm.getSeconds();
    let res = tm.toLocaleTimeString();
    x.innerHTML= res;
    }
    
    setInterval(output, 1000);