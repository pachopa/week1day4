var countdownGenerator = function (x) {
  var value = x;
  return function() {
    if( value === 0) {
        console.log("Blast Off!");
    } else if (value < 0) {
        console.log("Rockets already gone, bub!");
    } else {
        console.log("T-minus " + value + "...");
    }
    return value -= 1;
    }
}


var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!