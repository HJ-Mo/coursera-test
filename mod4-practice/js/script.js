//L41 definifng variables,function, and scope
var message = "in global";
console.log("global: message = " + message);

var a = function () {
  var message = "inside a";
  console.log("a: message = " + message);

  function b () {
    console.log("b: message = " + message); 
  }

  b();
}

a();

//L42 JavaScript Types
// should be undefined
var x;
console.log(x);

if (x == undefined) {
  console.log("x is undefined");
}

x = 5;
if (x == undefined) {
  console.log("x is undefined");
}
else {
  console.log("x has been defined");
}

//L43 Common Language COnstructs
// ***** String concatination
var string = "Hello";
// string += " World";
string = string + " World";
console.log(string + "!");


// ***** Regular math operators: +, -, *, /
console.log((5 + 4) / 3);
console.log(undefined / 5);
function test1 (a) {
  console.log( a / 5);
}
test1();

// ***** Equality 
var x = 4, y = 4;
if (x == y) {
  console.log("x=4 is equal to y=4");
}

x = "4";
if (x == y) {
  console.log("x='4' is equal to y=4");
}

// ***** Strict equality
if (x === y) {
  console.log("Strict: x='4' is equal to y=4");
}
else {
  console
  .log("Strict: x='4' is NOT equal to y=4");
}

// ***** If statement (all false)
if ( false || null || 
     undefined || "" || 0 || NaN) {
  console.log("This line won't ever execute");
}
else {
  console.log ("All false");
}

// ***** If statement (all true)
if (true && "hello" && 1 && -1 && "false") {
  console.log("All true");
}

// ***** Best practice for {} style
// Curly brace on the same or next line...
// Is it just a style?
function a() 
{
  return
  { 
    name: "Yaakov"
  };
}

function b() {
  return { 
      name: "Yaakov"
  };
}

console.log(a());
console.log(b());

// For loop
var sum = 0;
for (var i = 0; i < 10; i++) {
  console.log(i);
  sum = sum + i;
}
console.log("sum of 0 through 9 is: " + sum);


//L44 Handling Default Values
// Default values
function orderChickenWith(sideDish) {
  sideDish = sideDish || "whatever!";
  console.log("Chicken with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith();

//L45 Craating Objects Using 'new Object()'syntax
//Object creation
var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "blue";

console.log(company);
console.log("Company CEO name is: " + company.ceo.firstName);

console.log(company["name"]);
var stockPropName = "stock of company";
company[stockPropName] = 110;

console.log("Stock price is: " + 
  company[stockPropName]);

// Better way: object literal
var facebook = {
  name: "Facebook",
  ceo: {
    firstName: "Mark",
    favColor: "blue"
  },
  "stock of company": 110
};

console.log(facebook.ceo.firstName);

//Defining a variable as an Object Literal accomplishes 
//pretty much the same thing as defining a variable equal to 'new Object()'. 
//However, it's faster and easier to type up an object literal.
//True

//L46 Function Explained
// Functions are First-Class Data Types
// Functions ARE objects
function multiply(x, y) {
  return x * y;
} 
multiply.version = "v.1.0.0";
console.log(multiply.version);


// Function factory
function makeMultiplier(multiplier) {
  var myFunc = function (x) {
    return multiplier * x;
  };
  return myFunc;
}

var multiplyBy3 = makeMultiplier(3);//multiplier 가 3 지정하고 *3 프로세스 기계만들어짐
console.log(multiplyBy3(10));//x를 10으로 지정
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));

// Passing functions as arguments
function doOperationOn(x, operation) {
  return operation(x);
}

var result = doOperationOn(5, multiplyBy3);//function에 object에 object를 지정해줌,위에 있는 코드가 없으면 실행 불가
console.log(result);
result = doOperationOn(100, doubleAll);
console.log(result);

//L47 passing variables by value vs by reference
// Copy by Reference vs by Value
var a = 7;
var b = a;
console.log("a: " + a);
console.log("b: " + b);

b = 5;
console.log("after b update:");
console.log("a: " + a);
console.log("b: " + b);

var a = { x: 7 };
var b = a;
console.log(a);
console.log(b);
//b = a={x:7}

b.x = 5;
console.log("after b.x update:");
console.log(a);
console.log(b);
//b={x:5} = a


// Pass by reference
function changePrimitive(primValue) {
  console.log("in changePrimitive...");
  console.log("before:");
  console.log(primValue);
  
  primValue = 5;
  console.log("after:");
  console.log(primValue);
}

var value = 7;
changePrimitive(value); // primValue = value
console.log("after changePrimitive, orig value:");
console.log(value);


// Pass by value
function changeObject(objValue) {
  console.log("in changeObject...");
  console.log("before:");
  console.log(objValue);
  
  objValue.x = 5;
  console.log("after:");
  console.log(objValue);
}

value = { x: 7 }; 
changeObject(value); // objValue = value
console.log("after changeObject, orig value:");
console.log(value);

//L48 Function Constructors, prototype, and the 'this' Keyword
// Function constructors
function Circle (radius) {
  //console.log(this); =>same result as console.log(myCircle);
  this.radius = radius; //can not return anything

//  this.getArea = 
//    function(){
//      return Math.PI* Math.pow(this.radius,2)
//    };
  //=>wasted the processing
}

Circle.prototype.getArea = 
  function () {
    return Math.PI * Math.pow(this.radius, 2);
  };
//if you put this prototype inside funtion, it would be a mistake.
//overriding the memory space of getArea every single time you're creating a circle
//it is wated processing.

var myCircle = new Circle(10); //new Object (); 주의!!! new를 제외하면 값(결과)가 나오지 않는다.
console.log(myCircle);
console.log(myCircle.getArea());
console.log(myCircle.getArea);

var myOtherCircle = new Circle(20);
console.log(myOtherCircle);

//L49 Object Literals and the 'this' Keyword
// Object literals and "this"
var literalCircle = { //new Object()
  radius: 10,

  getArea: function () {
    var self = this; //is referring to the literalCircle object.
    console.log(this);
//    return Math.PI * Math.pow(this.radius, 2);//this 가 가르키는 것은 literalCircle!

    var increaseRadius = function () {
      self.radius = 20;
    };
    increaseRadius();
    console.log(this.radius);

    return Math.PI * Math.pow(this.radius, 2);
  }
};

literalCircle.getArea();
console.log(literalCircle.getArea());

//Objects and Functions in Javascript Quiz
function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(this.name + " likes barking! Bark!");
}

var max = new Dog("Max", "Buddy");
max.bark();

//L50 Arrays
// Arrays
var array = new Array();
array[0] = "Yaakov";//0 base => start with 0
array[1] = 2;
array[2] = function (name) {
  console.log("Hello " + name);
};
array[3] = {course: " HTML, CSS & JS"};

console.log(array);
array[2](array[0]);//if ()is empty, it will show undefind
console.log(array[3].course);


// Short hand array creation
var names = ["Yaakov", "John", "Joe"];//if I put {}and write inside name :"", console show object!
console.log(names);

for (var i = 0; i < names.length; i++) {//length is property
  console.log("Hello " + names[i]);
}

names[100] = "Jim";//it will show 97times undefined, beacause btw3-100is empty
for (var i = 0; i < names.length; i++) {
  console.log("Hello " + names[i]);
}

var names2 = ["Yaakov", "John", "Joe"];

var myObj = {
  name: "Yaakov",
  course: "HTML/CSS/JS",
  platform: "Courera"
};
for (var prop in myObj) {//for is for loop! var prop in myObj means every proverties in my object.
  console.log(prop + ": " + myObj[prop]);
}

for (var name in names2) {
  console.log("Hello " + names2[name]);
}

names2.greeting = "Hi!"; //greeting becaome a property of the array no different than a number 0.1.2....

for (var name in names2) {
  console.log("Hello " + names2[name]);
}

//L51 closures
// Closures
function makeMultiplier (multiplier) {
  // var multiplier = 2;
  function b() {
    console.log("Multiplier is: " + multiplier);
  }
  b();


  return (
      function (x) {
        return multiplier * x;// dosenot create its own execution, this is just a function value.
      }

    );
}
//funtion is looking for multiplier inside the lexical environment first and then outside
var doubleAll = makeMultiplier(2);
console.log(doubleAll(10)); // its own exec env
