/*
 * Hello. 2 points.
 */

function hello() {
  let div = document.getElementById("output1") ;
  	div.innerHTML = "Hello, AP Computer Science Principles!";
  ////////////////// DO NOT MODIFY
  check("hello"); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hello, Again. 3 points.
 */

function helloAgain() {

  //////////// DO NOT MODIFY      Use the @name letiable to store
  let name; // DO NOT MODIFY      the value that the user enters
  //////////// DO NOT MODIFY      in response to your prompt.

name=prompt("Please enter your name.");
document.getElementById("output2").innerHTML=("Hello, " + name + "!")

  ///////////////////////////// DO NOT MODIFY
  check("helloAgain", name); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Celsius. 5 points.
 */

function celsius() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let cels = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

let fahrenheit = ((cels * 9/5) + 32).toFixed(2);
document.getElementById("output3").innerHTML=(cels + " degrees Celsius equals " + fahrenheit + " degrees Fahrenheit.")

  ////////////////////////// DO NOT MODIFY
  check("celsius", cels); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Fahrenheit. 5 points.
 */

function fahrenheit() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let fahr = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  let celsius = ((fahr -32) * 5 / 9).toFixed(2);
  document.getElementById("output4").innerHTML=(fahr + " degrees Fahrenheit equals " + celsius + " degrees Celsius.")

  ///////////////////////////// DO NOT MODIFY
  check("fahrenheit", fahr); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Inches. 5 points.
 */

function inches() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of inches, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let inches = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

let miles = Math.floor(inches / 63360);
let yards = Math.floor((inches % 63360 / 36));
let feet = Math.floor(((inches % 63360) % 36) / 12);
let inch = Math.floor(inches);
document.getElementById("output5").innerHTML=("Miles: " + miles + "<br>Yards: " + yards + "<br>Feet: " + feet + "<br>Inches: " + inch)


  ////////////////////////// DO NOT MODIFY
  check("inches", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Centimeters. 5 points.
 */

function centimeters() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of centimeters, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let centimeters = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

let kilometers = Math.floor(centimeters / 100000 );
let meters = Math.floor(centimeters / 100);
let centi = Math.floor(centimeters);
document.getElementById("output6").innerHTML=("Kilometers: " + kilometers + "<br>Meters: " + meters + "<br>Centimeters: " + centi)

  /////////////////////////////// DO NOT MODIFY
  check("centimeters", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Fluid Ounces. 5 points.
 */

function fluidOunces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of fluidOunces, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let fluidOunces = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  let gallons = Math.floor(fluidOunces / 128);
  let quarts = Math.floor((fluidOunces % 128) / 32);
  let pints = Math.floor(((fluidOunces % 128) % 32) / 16);
  let cups = Math.floor((((fluidOunces % 128) % 32) % 16) / 8);
  let fluidOz = Math.floor(fluidOunces);
  document.getElementById("output7").innerHTML=("Gallons: " + gallons + "<br>Quarts: " + quarts + "<br>Pints: " + pints + "<br>Cups: " + cups + "<br>Fluid Ounces: " + fluidOz);

  /////////////////////////////// DO NOT MODIFY
  check("fluidOunces", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Ounces. 5 points.
 */

function ounces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of ounces, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let ounces = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

 let tons = Math.floor(ounces / 32000);
 let pounds = Math.floor((ounces % 32000) / 160);
 let oz = Math.floor(ounces);
 document.getElementById("output8")/innerHTML=("Tons: " + tons + "<br>Pounds: " + "<br>Ounces: " + oz);

  ////////////////////////// DO NOT MODIFY
  check("ounces", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Money. 7 points.
 */

function money() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of pennies, which you'll likely
  // need to do. Please do not modify the value of input.

  /////////////////////// DO NOT MODIFY
  let pennies = input; // DO NOT MODIFY
  /////////////////////// DO NOT MODIFY

  let dollars = Math.floor(pennies % 100);
  let quarters = Math.floor((pennies % 100) / 25);
  let dimes = Math.floor(((pennies % 100) % 25) / 10); 
  let nickels = Math.floor((((pennies % 100) % 25) % 10) / 5);
  let penn = Math.floor(pennies);
  document.getElementById("output9").innerHTML=("Dollars: " + dollars + "<br>Quarters: " + quarters + "<br>Dimes: " + dimes + "<br>Nickels: " + nickels + "<br>Pennies: " + penn);

  ///////////////////////// DO NOT MODIFY
  check("money", input); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Change. 8 points.
 */

function change() {

  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative number less than 1.00."); // DO NOT MODIFY
  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of amount, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let amount = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  amount*=100
  let quarter = Math.floor((amount) / 25);
  let dime = Math.floor((amount - (quarter * 25)) / 10);
  let nickel = Math.floor((amount - (quarter * 25) - (dime * 10)) / 5);
  let penny = Math.floor((amount - (quarter * 25) - dime * 10) - (nickel * 5)) / 1);
  let coins = quarter + dime + nickel + penny

  if(coins==1) {
    document.getElementById("output10").innerHTML=coins + " coin.";
  }
  if(coins!=1) {
   document.getElementById("output10").innerHTML=coins + " coins."; 
  }
  ////////////////////////// DO NOT MODIFY
  check("change", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}
