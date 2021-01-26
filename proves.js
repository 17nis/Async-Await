const datos = [1,2,3];
const getDatos = () =>{
    return new Promise ((resolve, reject)=>{
        setTimeout(() =>{
            resolve(datos);
        },1500);
    });
}

getDatos().then((result)=>{
    console.log(result);
});