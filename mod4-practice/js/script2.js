//L52 Fake namespaces
var name= "John";//=> name var over write to John, so the result only show name John
function sayHi(){
  console.log( "Hi " + name);
}

//var johnGreeter = {};
//johnGreeter.name = "John";
//johnGreeter.sayHi = function () {
//  console.log("Hi " + johnGreeter.name);
//}

//L52 Immediately invoked Function Expressions(IIFEs)
(function (window) {
  var johnGreeter = {};
  johnGreeter.name = "John";
  var greeting = "Hi ";
  johnGreeter.sayHi = function () {
    console.log(greeting + johnGreeter.name);
  }

  window.johnGreeter = johnGreeter;

})(window);