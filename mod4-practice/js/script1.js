//L52 Fake namespaces
var name= "Yaakov";
function sayHello(){
  console.log( "Hello " + name);
}

//var yaakovGreeter = {};
//yaakovGreeter.name = "Yaakov";
//yaakovGreeter.sayHello = function () {
//  console.log("Hello " + yaakovGreeter.name);
//}


//L52 Immediately invoked Function Expressions(IIFEs)
(function (window) {
  var yaakovGreeter = {};
  yaakovGreeter.name = "Yaakov";
  var greeting = "Hello ";
  yaakovGreeter.sayHello = function () {
    console.log(greeting + yaakovGreeter.name);
  }

  window.yaakovGreeter = yaakovGreeter;

})(window);//whole thing is sitting inside of a function. last ()execute.
//if window is missing, var only exist inside the function.
//it is indeed exposed to the outside.


//Immediately Invoked Function Expressions are usually used to 
//place code into its own execution context not to conflict with the global scope.
//true
