let origArray = [2, 3, 4];

document.addEventListener("DOMContentLoaded", function (event) {

    writeToTextboxes(origArray);

    document.getElementById("btnCube").addEventListener("click", function () {
        // Cube
        let newArray = origArray.map(function (n) {
            return Math.pow(n, 3);
        });
        writeToTextboxes(newArray);
    });

    document.getElementById("btnToTheFourth").addEventListener("click", calculateToTheFourth);
});

function calculateSquares() {
    let newArray = origArray.map(function (n) {
        return Math.pow(n, 2);
    });
    writeToTextboxes(newArray);
}

function calculateToTheFourth() {
    let newArray = origArray.map(function (n) {
        return Math.pow(n, 4);
    });
    writeToTextboxes(newArray);
}

function writeToTextboxes(array) {
    document.getElementById("num1").value = array[0];
    document.getElementById("num2").value = array[1];
    document.getElementById("num3").value = array[2];
}