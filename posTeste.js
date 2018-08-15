var fs = require('fs')
var myNumber = undefined
function addOne(){
	fs.readFile('./number.txt', function doneReading(err, files){
	myNumber = parseInt(files)
	myNumber++
})
}
addOne()
console.log(myNumber)
