console.log("Hello world :D");
let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");
context.font = "10px serif"
canvas.width = 750;
canvas.height = 300;
let a = 50;
let nx = 13;
let ny = 4;
let notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
let tuningOffset = 0;

for (let j = 0; j < ny; j++) {

    for (let i = 0; i < nx; i++) {
        if (j == 0) {
            context.strokeRect(i * a, j * a, a, a);
            context.fillText(notes[i + tuningOffset + 9], (i) * a, (j + 1) * a);
        } else if (j == 1) {
            context.strokeRect(i * a, j * a, a, a);
            context.fillText(notes[i + tuningOffset + 5], (i) * a, (j + 1) * a);
        } else if (j == 2) {
            context.strokeRect(i * a, j * a, a, a);
            context.fillText(notes[i + tuningOffset], (i) * a, (j + 1) * a);
        } else if (j == 3) {
            context.strokeRect(i * a, j * a, a, a);
            context.fillText(notes[i + tuningOffset + 7], (i) * a, (j + 1) * a);
        }
    }



}


console.log(canvas);