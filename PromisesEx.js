var fetch = require('node-fetch')
function getUsers(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('RAKESH')
        },2000);
    })
}


getUsers().then((response) => console.log(response))

module.exports.getUsers = getUsers

