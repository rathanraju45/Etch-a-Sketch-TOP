let colors = [
    'rgb(255, 87, 51)',   // Coral Red
    'rgb(255, 195, 0)',   // Golden Yellow
    'rgb(97, 226, 148)',  // Mint Green
    'rgb(87, 177, 243)',  // Sky Blue
    'rgb(172, 67, 255)',  // Purple
    'rgb(255, 64, 129)',  // Pink
    'rgb(0, 230, 118)',   // Emerald Green
    'rgb(41, 121, 255)',  // Royal Blue
    'rgb(255, 145, 0)',   // Orange
    'rgb(149, 117, 205)', // Lavender
    'rgb(38, 198, 218)',  // Turquoise
    'rgb(236, 64, 122)',  // Rose
    'rgb(92, 107, 192)',  // Indigo
    'rgb(255, 167, 38)',  // Amber
    'rgb(141, 110, 99)',  // Brown
    'rgb(0, 200, 83)',    // Light Green
    'rgb(239, 83, 80)',   // Light Red
    'rgb(171, 71, 188)',  // Light Purple
    'rgb(66, 165, 245)',  // Light Blue
    'rgb(255, 112, 67)'   // Light Orange
];

let size = 16;

let sizeSpan = document.getElementById("grid-size");
let cell = document.createElement("div");
cell.className = "cell";

let container = document.getElementById("container");
let containerWidth;

let cellSize;
let input = document.querySelector("input");

function createSketchPad() {
    container.innerHTML = "";
    sizeSpan.innerHTML = size + " × " + size
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let newCell = cell.cloneNode(true);
            newCell.style.width = cellSize + "px";
            newCell.style.height = cellSize + "px";
            newCell.style.opacity = 0.1;
            newCell.addEventListener("mouseover", () => {
                if (newCell.style.backgroundColor === "") {
                    newCell.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                    newCell.style.transition = "background-color 0.3s";
                }
                let currentOpacity = parseFloat(newCell.style.opacity);
                if (currentOpacity < 1) {
                    newCell.style.opacity = (currentOpacity + 0.1).toFixed(1);
                }
            });
            container.appendChild(newCell);
        }
    }
}

function adjustCellSize() {
    cellSize = containerWidth / size;
    console.log(containerWidth - cellSize * size);
}

function updateSketchPad() {
    size = parseInt(input.value);
    if (isNaN(size) || size < 1 || size > 100) {
        alert("Please enter a number between 1 and 100");
        return;
    }
    adjustCellSize();
    createSketchPad();
}

function init() {
    containerWidth = container.offsetWidth - 2;
    adjustCellSize();
    createSketchPad();
}

window.addEventListener("load", init);