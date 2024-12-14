let expression;
function textAppend (value) {
    let display = document.getElementById('display');
    display.value += value;
}

function clean(value){
    let display = document.getElementById('display');
    display.value = ''
}

function back(){
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate(){
    let display = document.getElementById('display');

    let result = eval(display.value);
    display.value = result;
}