const arr = [{title: 'Sr. Developer',job:'Program'},{title:'Sr. DM',job:'Screw around'}]

function updateArray(){
    arr.forEach((item,index) =>{
        console.log(index+"->"+JSON.stringify(item))
    })
}


function addToArr(newItem){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            arr.push(newItem)
            console.log('DONE WITH addToArr')
            //resolve('ALL DONE')
        },2000)
    })
}

addToArr({title: 'Developer',job:'Learn and Enjoy'}).then(()=> {
    console.log('DONE WITH');
    updateArray()
}).catch((err)=>{
    console.log('I was called')
})

//we can use fetch or ajax for calling third party services.