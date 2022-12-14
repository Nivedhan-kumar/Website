const memoize = (fn) => {
    let cache = {}
    return (...args) => {
        let cacheKey = args.map(n => n.toString() + '+').join('')
        if (cacheKey in cache) {
            return cache[cacheKey]
        } else {
            let result = args.reduce((acc, curr) => fn(acc, curr), 0);
            cache[cacheKey] = result;
            return result;
        }
    }
  }
  
  const add = (a, b,) => a + b 
  
  const memoizeAdd = memoize(add)
  console.log(memoizeAdd(15,5,10,40));
  
  // eg.2
  
  /* function display(){
    let cache = {};
    return(n)=>{
       if(n in cache){
        return cache[n]}
          else{
        let result = n+ 10;
        cache[n]= result;
        return result;
          }
        }
       }
      
       let res1 = display()
       console.log(res1(5)); */