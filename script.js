// Selecting all divs
let orange = document.querySelector("#orange");
let yellow = document.querySelector("#yellow");
let red = document.querySelector("#red");
let blue = document.querySelector("#blue");
// for multicolor select
const multiColors = document.querySelector("#multi-color");

let arr = [orange, yellow, red, blue];

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
  }
}

// Add event listeners to each color-changing div
arr.forEach((colorDiv) => {
  colorDiv.addEventListener("click", handleColorChange);
});

// Function to generate a random hexadecimal color
const randcolor = () => {
  let hexa = "0123456789ABCDEF";
  let hexpound = "#";
  for (let i = 0; i < 6; i++) {
    hexpound += hexa[Math.floor(Math.random() * 16)];
  }
  return hexpound;
}

// Function to change the background color to a random color
function changecolor() {
  const newColor = randcolor();
  document.body.style.backgroundColor = newColor;
  multiColors.innerText = newColor; // Display the random color value in the multiColors div
  console.log(newColor);
}

// Add event listener to the multi-color div
multiColors.addEventListener("click", changecolor);
