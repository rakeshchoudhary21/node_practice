//Buffers store data outside the v8 heap
//Buffers are awesome as they store data as octet stream which require less space

var buffer = new Buffer(256)

buffer.write('RAKESH IS AWESOME')

//prints out octet representation
console.log(buffer)

//prints string form
console.log(buffer.toString())

//use Buffer.byteLength method to decide the size of buffer.
console.log(Buffer.byteLength('RAKESH IS AWESOME'))
//Since once allotted a buffer's size cant be changed

var arr = [1,23,4,4,5]
console.log(arr.concat(",")) //add at the end
