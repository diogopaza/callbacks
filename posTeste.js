
/*
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
*/


var fs = require('fs')
var myNumber = undefined
function addOne(callback){
	fs.readFile('./number.txt', function doneReading(err, files){
	myNumber = parseInt(files)
	myNumber++
	callback()
})
}
function logMyNumber(){
	console.log(myNumber)
}
addOne(logMyNumber)
