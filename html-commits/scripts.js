let rT = 0;
let buF = "0";
let pF;
const screen = document.querySelector('.screen');

function ClickButton(value){
    if (isNaN(value)){
        handleSymbol(value);
    }
    else{
        handleNumber(value);
    }

    // Check for the easter egg [WIP]
    if (buF === '69=' && value === '=') {
        screen.innerText = 'nice ;)';
        return;
    }

    screen.innerText = buF;
}

// Defining cases for the click of buttons like AC = and the arithmetic functions
function handleSymbol(symbol){
    switch(symbol){
        case 'AC':
            buF = '0';
            rT = 0;
            break;
        case '=':
            if (pF === null){
                return;
            }
            doMath(parseInt(buF));
            pF = null;
            buF = rT;
            rT = 0;
            break;
        case '+':
        case '−':
        case '×':
        case '÷':
        case '∧':
        case '%':
            handleMath(symbol);
            break;
    }
}

// Sets the value of rT to intbuF, 
// meaning that the current value of buF becomes the new running total.
function handleMath(symbol){
    if (buF === '0'){
        return;
    }

    const intbuF = parseInt(buF);

    if (rT === 0){
        rT = intbuF;
    }
    else{
        doMath(intbuF);
    }

    pF = symbol;
    buF = '0';
}

function doMath(intbuF){
    if (pF === '+'){
        rT += intbuF;
    }
    else if (pF === '−'){
        rT -= intbuF;
    }
    else if (pF === '×'){ 
        rT *= intbuF;
    }
    else if (pF === '÷'){
        rT /= intbuF;
    }
    else if (pF === '∧'){
        rT **= intbuF;
    }
    else if (pF === '%'){
        rT = Math.floor(rT) % Math.floor(intbuF);
    }
}

function handleNumber(numberString){
    if (buF === '0'){
        buF = numberString;
    }
    else{
        buF += numberString;
    }
}

function __init__ (){
    document.querySelector('.calculator-button').addEventListener('click', function(event){
        ClickButton(event.target.innerText);
    })
}

__init__ ();
