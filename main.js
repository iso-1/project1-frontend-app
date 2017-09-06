"use strict;"

function answer(){
    var input1 = document.getElementById('input1');
    var input2 = document.getElementById('input2');
    var output = document.getElementById('output');





    var result = (input1.value) * (input1.value) * parseInt(input2.value);

    output.textContent = result
}