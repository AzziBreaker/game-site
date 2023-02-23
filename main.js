console.log("Hello world :D");
let canvas = document.getElementById("gameCanvas");
let tL = document.getElementById("tuneLeft");
let tR = document.getElementById("tuneRight");
let t = document.getElementById("tune");
let context = canvas.getContext("2d");

let w = 650;
canvas.width = w;
let h = 200;
canvas.height = 200;
let a = 50;
let nx = 13;
let ny = 4;
let clickedX = 0;
let clickedY = 0;
let notes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
    50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
    70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
    80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
    90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
    100
];
let tuningOffset = 0;
let clickedImg = new Image();
let x;
let y;
clickedImg.src = "images/click.png";

drawMap();

function drawMap(x, y) {

    context.beginPath();
    context.moveTo(a, 0);
    context.lineTo(a, 200);
    context.stroke();

    context.beginPath();
    context.moveTo(0, 23);
    context.lineTo(w, 23);
    context.stroke();

    context.beginPath();
    context.moveTo(0, 23 + a);
    context.lineTo(w, 23 + a);
    context.stroke();

    context.beginPath();
    context.moveTo(0, 23 + (a * 2));
    context.lineTo(w, 23 + (a * 2));
    context.stroke();

    context.beginPath();
    context.moveTo(0, 23 + (a * 3));
    context.lineTo(w, 23 + (a * 3));
    context.stroke();

    for (let j = 0; j < ny; j++) {

        for (let i = 0; i < nx; i++) {
            if (j == 0) {


                context.fillText(notes[i + tuningOffset + 9] % 12, (i) * a + 22, (j + 1) * a - 22);


            } else if (j == 1) {


                context.fillText(notes[i + tuningOffset + 4] % 12, (i) * a + 22, (j + 1) * a - 22);


            } else if (j == 2) {


                context.fillText(notes[i + tuningOffset] % 12, (i) * a + 22, (j + 1) * a - 22);


            } else if (j == 3) {


                context.fillText(notes[i + tuningOffset + 7] % 12, (i) * a + 22, (j + 1) * a - 22);

            }
        }
    }
    context.drawImage(clickedImg, x * a, y * a, a, a);


}

function clearMap() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

canvas.onclick = function(e) {
    clearMap();
    x = Math.floor((e.x - canvas.offsetLeft) / a);
    y = Math.floor((e.y - canvas.offsetTop) / a);
    drawMap(x, y);
    printNote(x, y);

}

function printNote(x, y) {
    if (y == 0) {
        console.log(notes[x + tuningOffset + 9] % 12);
    } else if (y == 1) {
        console.log(notes[x + tuningOffset + 4] % 12);
    } else if (y == 2) {
        console.log(notes[x + tuningOffset] % 12);
    } else {
        console.log(notes[x + tuningOffset + 7] % 12);
    }
}

function press1() {
    x = 0;
    y = 0;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function press2() {
    x = 1;
    y = 0;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function press3() {
    x = 2;
    y = 0;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function press4() {
    x = 3;
    y = 0;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function press5() {
    x = 4;
    y = 0;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function press6() {
    x = 5;
    y = 0;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function press7() {
    x = 6;
    y = 0;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function press8() {
    x = 7;
    y = 0;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function press9() {
    x = 8;
    y = 0;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function press0() {
    x = 9;
    y = 0;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function pressMin() {
    x = 10;
    y = 0;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function pressEqual() {
    x = 11;
    y = 0;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function pressQ() {
    x = 0;
    y = 1;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function pressW() {
    x = 1;
    y = 1;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function pressE() {
    x = 2;
    y = 1;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function pressR() {
    x = 3;
    y = 1;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function pressT() {
    x = 4;
    y = 1;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function pressY() {
    x = 5;
    y = 1;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function pressU() {
    x = 6;
    y = 1;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function pressI() {
    x = 7;
    y = 1;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function pressO() {
    x = 8;
    y = 1;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function pressP() {
    x = 9;
    y = 1;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function pressR1() {
    x = 10;
    y = 1;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function pressR2() {
    x = 11;
    y = 1;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function pressA() {
    x = 0;
    y = 2;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function pressS() {
    x = 1;
    y = 2;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function pressD() {
    x = 2;
    y = 2;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function pressF() {
    x = 3;
    y = 2;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function pressG() {
    x = 4;
    y = 2;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function pressH() {
    x = 5;
    y = 2;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function pressJ() {
    x = 6;
    y = 2;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function pressK() {
    x = 7;
    y = 2;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function pressL() {
    x = 8;
    y = 2;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function pressDots() {
    x = 9;
    y = 2;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function pressKav() {
    x = 10;
    y = 2;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function pressLine() {
    x = 11;
    y = 2;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function pressSmol() {
    x = 0;
    y = 3;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function pressZ() {
    x = 1;
    y = 3;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function pressX() {
    x = 2;
    y = 3;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function pressC() {
    x = 3;
    y = 3;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function pressV() {
    x = 4;
    y = 3;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function pressB() {
    x = 5;
    y = 3;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function pressN() {
    x = 6;
    y = 3;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function pressM() {
    x = 7;
    y = 3;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function pressZap() {
    x = 8;
    y = 3;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function pressDot() {
    x = 9;
    y = 3;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function pressSlash() {
    x = 10;
    y = 3;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

function pressShft() {
    x = 11;
    y = 3;
    clearMap();
    drawMap(x, y);
    printNote(x, y);
}

document.onkeypress = function(e) {
    let key = e.key;
    switch (key) {
        case "1":
            press1();
            break;
        case "2":
            press2();
            break;
        case "3":
            press3();
            break;
        case "4":
            press4();
            break;
        case "5":
            press5();
            break;
        case "6":
            press6();
            break;
        case "7":
            press7();
            break;
        case "8":
            press8();
            break;
        case "9":
            press9();
            break;
        case "0":
            press0();
            break;
        case "-":
            pressMin();
            break;
        case "=":
            pressEqual();
            break;
        case "q":
            pressQ();
            break;
        case "w":
            pressW();
            break;
        case "e":
            pressE();
            break;
        case "r":
            pressR();
            break;
        case "t":
            pressT();
            break;
        case "y":
            pressY();
            break;
        case "u":
            pressU();
            break;
        case "i":
            pressI();
            break;
        case "o":
            pressO();
            break;
        case "p":
            pressP();
            break;
        case "[":
            pressR1();
            break;
        case "]":
            pressR2();
            break;
        case "a":
            pressA();
            break;
        case "s":
            pressS();
            break;
        case "d":
            pressD();
            break;
        case "f":
            pressF();
            break;
        case "g":
            pressG();
            break;
        case "h":
            pressH();
            break;
        case "j":
            pressJ();
            break;
        case "k":
            pressK();
            break;
        case "l":
            pressL();
            break;
        case ";":
            pressDots();
            break;
        case "'":
            pressKav();
            break;
        case "\\":
            pressLine();
            break;
        case "<":
            pressSmol();
            break;
        case "z":
            pressZ();
            break;
        case "x":
            pressX();
            break;
        case "c":
            pressC();
            break;
        case "v":
            pressV();
            break;
        case "b":
            pressB();
            break;
        case "n":
            pressN();
            break;
        case "m":
            pressM();
            break;
        case ",":
            pressZap();
            break;
        case ".":
            pressDot();
            break;
        case "/":
            pressSlash();
            break;
        case "shift":
            pressShft();
            break;

    }
    console.log(key);
}





tL.onclick = function() {
    tuningOffset--;
    t.textContent = tuningOffset;
};

tR.onclick = function() {
    tuningOffset++;
    t.textContent = tuningOffset;
}

console.log(canvas);

function A4() {
    var A4 = new Audio("");
    A4.play();
}

function whatNote() {

}