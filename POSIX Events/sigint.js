setInterval(()=>{},5000);
    
process.on('SIGINT',()=> {
        //fires when ctrl-c is pressed.
        process.stdout.write('Going to shutdown node!!!!')
        process.exit()
    })