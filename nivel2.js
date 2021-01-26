
let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];

let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];



const getEmpleado = (num) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let text = [];
            for(let i = 0; i<employees.length; i++){
                text.push(employees[i].id);
            }
            if(text.includes(num)){
                for(let i = 0; i<employees.length; i++){
                    if(employees[i].id == num){
                        resolve(employees[i])
                    }
                }
            }else{reject("No ID was found")}
        },2000);
    })
};
const getSalario = (empleado) =>{
    for(salary of salaries){
        if(salary.id == empleado.id){
            return(salary.salary);
        }
    }
};

async function fetchingEmpleado(id){
    try {
        const empleado = await getEmpleado(id);
        console.log(empleado);
        console.log(getSalario(empleado));
    } catch (err) {
        console.log(err)
    }
    
}
fetchingEmpleado(1);




    
