// function calling itself is called recursive function.. It has condition when to stop ...

let arr = [1,2,3,4,5,6,7,8,9,0];  //eg one..
i=0;
 function main(){
    console.log(arr[i]);
    i++;
    if(i<10){
        main();
    }
    }
 
 main();