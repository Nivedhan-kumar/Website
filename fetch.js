fetch('https://fakestoreapi.com/products',{
    method: 'POST',
    body: JSON.stringify({
        title: 'nivedhan'
    }),
    headers:{
        'Content-type':"application/json; charset=UTF-8"
    },
    
}).then((res) =>{
    return res.json()
}).then(data =>{
    console.log(data)});


   /* data.map((values)=>{
    const root= document.createElement('div')
    const datas = document.createElement('ul')
    const datalist = document.createElement('li')
    datas.appendChild(datalist);
    root.appendChild(datas);
    root.innerHTML=values.description;
    document.body.appendChild(root);  

   })
})
 */