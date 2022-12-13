console.log("JavaScript Portion of the Test");

// Step 1: Write a multi-line comment detailing your name and student number

/*
Name: Carter Grandon
Student number: 200519075
*/

// Step 2: Create a block scoped, immutable variable that stores an empty array

const coolArray = [];


// Step 3: Add the 3 people's names to the array

coolArray.push("Carter", "Shaun", "Boo");

// Step 4: Remove the second array item from the array

coolArray.splice(1, 1);

// Step 5: Using array map, iterate over the array items and make them all uppercase. Store the result in a new, block scoped, mutable variable

let newArray = coolArray; //I'm stumped on the uppercase part


// Step 6: Create an event listener that fires a callback function when the aside h2 is clicked. It should alert "Hello from Boo the World's Cutest Dog!";

document.querySelector("aside > h2").addEventListener("click", helloFromBoo);

function helloFromBoo() {
    alert("Hello from Boo the World's Cutest Dog!");
}