const arr = [{title: 'Sr. Developer',job:'Program'},{title:'Sr. DM',job:'Screw around'}]

function printArray(){
    arr.forEach((item,index) =>{
        console.log(index+"->"+JSON.stringify(item))
    })
}


function addToArr(newItem){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
            arr.push(newItem)
            resolve()
        },2000)
    })
}
async function root(){
     await addToArr({title: 'Developer',job:'Coding is life.'})
     printArray()
}

root()
//async await let u get rid of then chain of promises


console.log('=======================Part two=========================')
const fetch = require("node-fetch");

async function getUsers(){
    const res =  await fetch('https://jsonplaceholder.typicode.com/users')

    const data = await res.json();
    data.forEach(item=>{
        console.log(item.website)
    })
    return data;
}


async function displayUsers(){
    const res = await getUsers()
    console.log(res)
}

displayUsers()