// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!');

// First, tell us your name
let yourName = "Matthew Rhoades"; // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
// let gb = 0;      // Gingerbread

let gb = localStorage.getItem('gb');
if (gb === null) {
    gb = 0;
} else {
    gb = parseInt(gb)
}
document.querySelector("#qty-gb").textContent = gb;

let cc = localStorage.getItem('cc');
if (cc === null) {
    cc = 0;
} else {
    cc = parseInt(cc)
}
document.querySelector("#qty-cc").textContent = cc;


let sugar = localStorage.getItem('sugar');
if (sugar === null) {
    sugar = 0;
} else {
    sugar = parseInt(sugar)
}
document.querySelector("#qty-sugar").textContent = sugar;





// Code to update name display 
document.getElementById('credit').textContent = `Created by ${"Matthew Rhoades"}`;


// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Gingerbread + button was clicked!');
    gb = gb + 1;
    document.querySelector("#qty-gb").textContent = gb;
    localStorage.setItem('gb', gb);
    document.querySelector("#qty-total").textContent = gb + cc + sugar
    
    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
});

// TODO: Hook up event listeners for the rest of the buttons

document.getElementById('add-cc').addEventListener('click', function() {
    console.log('Chocolate Chip + button was clicked!');
    cc = cc + 1;
    document.querySelector("#qty-cc").textContent = cc;
    localStorage.setItem('cc', cc);
    document.querySelector("#qty-total").textContent = gb + cc + sugar

});

document.getElementById('add-sugar').addEventListener('click', function() {
    console.log('Sugar Sprinkle + button was clicked!');
    sugar = sugar + 1;
    document.querySelector("#qty-sugar").textContent = sugar;
    localStorage.setItem('sugar', sugar);
    document.querySelector("#qty-total").textContent = gb + cc + sugar

});


// adding minus buttons

document.getElementById('minus-gb').addEventListener('click', function() {
    console.log('Gingerbread + button was clicked!');
    gb = gb - 1;
    document.querySelector("#qty-gb").textContent = gb;
    localStorage.setItem('gb', gb);
    document.querySelector("#qty-total").textContent = gb + cc + sugar

});

document.getElementById('minus-cc').addEventListener('click', function() {
    console.log('Chocolate Chip + button was clicked!');
    cc = cc - 1;
    document.querySelector("#qty-cc").textContent = cc;
    localStorage.setItem('cc', cc);
    document.querySelector("#qty-total").textContent = gb + cc + sugar

});

document.getElementById('minus-sugar').addEventListener('click', function() {
    console.log('Sugar Sprinkle + button was clicked!');
    sugar = sugar - 1;
    document.querySelector("#qty-sugar").textContent = sugar;
    localStorage.setItem('sugar', sugar);
    document.querySelector("#qty-total").textContent = gb + cc + sugar

});

