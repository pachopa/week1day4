var wrapLog = function (callback, name) { //calback 은 function
  
     return function(number1, number2){
       console.log(name + "("+ number1 + ',' + number2 + ') => ' + callback(number1, number2));
    }
};


var sum = function (a,b) { return a + b; };
var logSum = wrapLog(sum, "sum");

logSum(5,3); // sum(5,3) => 8
logSum(3,2); // sum(3,2) => 5