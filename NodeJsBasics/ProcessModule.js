//Process module is awesome in a way, it provides u argv, env variable, node version and lot more cool stuff


console.log(JSON.stringify(process.env))

console.log(JSON.stringify(process.argv))

//with child_process module u can call exec method to start execution of a file in a child process
//the parent process can actually send message to this child and also kill the child at will