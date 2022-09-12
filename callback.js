display1=(res1)=>{
    (setTimeout(()=>{
    console.log('1st message') 
    res1();
    },3000) )
   }


   display2=(res2)=>{
    (setTimeout(()=>{
    console.log('2nd message') 
    res2();
    },3000) )
   }

   display3=()=>{
    (setTimeout(()=>{
    console.log('3rd message') 
    },3000) )
   }

   display1(()=>{
    display2(
        ()=>{
        display3();
    })
   })


   

