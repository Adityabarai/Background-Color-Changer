// Selecting all divs
let black = document.querySelector("#orange");
let yellow = document.querySelector("#yellow");
let red = document.querySelector("#red");
let blue = document.querySelector("#blue");
let green = document.querySelector("#green");

let arr = [black, yellow, red, blue, green];

// Function to handle color changes
function handleColorChange(event) {
    // Get the id of the clicked div
    let colorId = event.target.id;
    
    // Change the body's background color based on the id
    if (colorId === "orange") {
        document.body.style.backgroundColor = "orange";
    } else if (colorId === "yellow") {
        document.body.style.backgroundColor = "yellow";
    } else if (colorId === "red") {
        document.body.style.backgroundColor = "red";
    } else if (colorId === "blue") {
        document.body.style.backgroundColor = "blue";
    } else if (colorId === "green") {
        document.body.style.backgroundColor = "green";
    }
}

// Add event listeners to each color-changing div
arr.forEach((colorDiv) => {
    colorDiv.addEventListener("click", handleColorChange);
});
