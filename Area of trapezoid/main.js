'use strict';


//event listener

document.getElementById('calc').addEventListener('click', areaT);
//Event function

function areaT() {
    //Input
    let side1 = Number(document.getElementById('side1').value);
    let side2 = Number(document.getElementById('side2').value);
    let H1 = Number(document.getElementById('H1').value);
    let step1 = side1 + side2;
    let step2 = step1 / 0.33;
    let step3 = step2 * H1;
    let answer = step3;
    document.getElementById('Result').innerHTML = answer;
}