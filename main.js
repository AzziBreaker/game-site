console.log("Hello world :D");
let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");

canvas.width = 650;
canvas.height = 200;
let a = 50;
let nx = 13;
let ny = 4;
let clickedX = 0;
let clickedY = 0;
let notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
let tuningOffset = 0;
let fretImg = new Image();
fretImg.src = "images/string.png";
let clickedImg = new Image();
clickedImg.src = "images/click.png";


drawMap();

function drawMap(x, y) {

    context.beginPath();
    context.moveTo(a, 0);
    context.lineTo(a, 200);
    context.stroke();

    for (let j = 0; j < ny; j++) {

        for (let i = 0; i < nx; i++) {
            if (j == 0) {
                context.drawImage(fretImg, i * a, j * a, a, a);
                context.fillText(notes[i + tuningOffset + 9], (i) * a + 22, (j + 1) * a - 22);
            } else if (j == 1) {

                context.drawImage(fretImg, i * a, j * a, a, a);
                context.fillText(notes[i + tuningOffset + 5], (i) * a + 22, (j + 1) * a - 22);
            } else if (j == 2) {

                context.drawImage(fretImg, i * a, j * a, a, a);
                context.fillText(notes[i + tuningOffset], (i) * a + 22, (j + 1) * a - 22);
            } else if (j == 3) {

                context.drawImage(fretImg, i * a, j * a, a, a);
                context.fillText(notes[i + tuningOffset + 7], (i) * a + 22, (j + 1) * a - 22);
            }
        }
    }
    context.drawImage(clickedImg, Math.floor(x / a) * a, Math.floor(y / a) * a, a, a);


}

function clearMap() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

canvas.onclick = function(e) {
    clearMap();
    let x = e.x - canvas.offsetLeft;
    let y = e.y - canvas.offsetTop;
    drawMap(x, y);
    console.log(Math.floor(x / a) + " " + Math.floor(y / a));

}



console.log(canvas);