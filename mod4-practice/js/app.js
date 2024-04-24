//L52 Fake namespaces
sayHello();
sayHi();

yaakovGreeter.sayHello();
johnGreeter.sayHi();

// Immediately Invoked Function Expression
// IIFE
(function (name) {
  console.log("Hello " + name);
})//from top to bottom, it produce the function.
("Coursera!");//simple () invoke function object.