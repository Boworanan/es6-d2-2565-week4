//Declarating Functiom
function sayAsing(){
    console.log("Welcome TO Thailand")
}
//Annonymous Function
let sayHello = function(){
    console.log("Welcome TO Annonymous")
}
//3
function addName(callback, name){
    callback()
    console.log(name)
}


//Call Function
// sayAsing();
// sayHello();
addName(sayHello, "WAVE")