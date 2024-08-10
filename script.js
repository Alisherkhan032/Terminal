let container = document.querySelector(".container");

let gradient = [
    "linear-gradient(to right, #D8B5FF, #1EAE98)", 
    "linear-gradient(to left, #D8B59F, #1EAE98)",
    "linear-gradient(to top, #D8B59F, #1EA998)",
    "linear-gradient(to top, #D8759F, #1EA998)",
];

let idx = Math.floor(Math.random()*gradient.length);
container.style.background = gradient[idx];
