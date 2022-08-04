let value1 = "";
let value2 = 0;
let operator = "";
let operatorIsActive = false;
let calcButtons = document.querySelectorAll('button');



calcButtons.forEach(calcButton => calcButton.addEventListener('click', collectData))
window.addEventListener('keydown', collectData);


//math operations
function sum(a,b) {
	return a+b;
}

function subtract(a,b) {
	return a-b;
}

function multiply(a,b) {
  return a*b;
}

function division(a,b) {
    return a/b;
  }

function power(a,b) {
	return a**b
}

function squareroot(a) {
    return Math.sqrt(a);
  }

function factorial(a) {
	let counter = a;
    let total = 1;
    while (counter > 0){
    total = counter * total;
    counter -= 1;
  }
  return total;
}

function fraction(a) {
    return 1/a;
}

function plusminus(a) {
    return a*-1;
}



function collectData(e) {   
    let data = '';
    if (e.key === undefined) {
        data = this.id;
    } else {
        data = e.key;
    }
    switch(data) {
        case '0':
            if (operatorIsActive == false && (value1 != 0 || value1.includes('.') == true)){
                value1 = value1 + '0';
            } else if (value1 == 0 || operatorIsActive == true) {
                value1 = '0'
                operatorIsActive = false;
            }
            break;
        case '9':
            if (operatorIsActive == false && (value1 != 0 || value1.includes('.') == true)){
                value1 = value1 + '9';
            } else if (value1 == 0 || operatorIsActive == true) {
                value1 = '9'
                operatorIsActive = false;
            }
            break;
        case '8':
            if (operatorIsActive == false && (value1 != 0 || value1.includes('.') == true)){
                value1 = value1 + '8';
            } else if (value1 == 0 || operatorIsActive == true) {
                value1 = '8'
                operatorIsActive = false;
            }
            break;
        case '7':
            if (operatorIsActive == false && (value1 != 0 || value1.includes('.') == true)){
                value1 = value1 + '7';
            } else if (value1 == 0 || operatorIsActive == true) {
                value1 = '7'
                operatorIsActive = false;
            }
            break;
        case '6':
            if (operatorIsActive == false && (value1 != 0 || value1.includes('.') == true)){
                value1 = value1 + '6';
            } else if (value1 == 0 || operatorIsActive == true) {
                value1 = '6'
                operatorIsActive = false;
            }
            break;
        case '5':
            if (operatorIsActive == false && (value1 != 0 || value1.includes('.') == true)){
                value1 = value1 + '5';
            } else if (value1 == 0 || operatorIsActive == true) {
                value1 = '5'
                operatorIsActive = false;
            }
            break;
        case '4':
            if (operatorIsActive == false && (value1 != 0 || value1.includes('.') == true)){
                value1 = value1 + '4';
            } else if (value1 == 0 || operatorIsActive == true) {
                value1 = '4'
                operatorIsActive = false;
            }
            break;
        case '3':
            if (operatorIsActive == false && (value1 != 0 || value1.includes('.') == true)){
                value1 = value1 + '3';
            } else if (value1 == 0 || operatorIsActive == true) {
                value1 = '3'
                operatorIsActive = false;
            }
            break;
        case '2':
            if (operatorIsActive == false && (value1 != 0 || value1.includes('.') == true)){
                value1 = value1 + '2';
            } else if (value1 == 0 || operatorIsActive == true) {
                value1 = '2'
                operatorIsActive = false;
            }
            break;
        case '1':
            if (operatorIsActive == false && (value1 != 0 || value1.includes('.') == true)){
                value1 = value1 + '1';
            } else if (value1 == 0 || operatorIsActive == true) {
                value1 = '1'
                operatorIsActive = false;
            }
            break;
        case '.':
        case 'period':
            if (value1.length == 0) {
                value1 = value1 + '0.';
            } else if (value1.toString().includes('.') == false) {
                value1 = value1 + '.';
            }
            break;
        case 'clear':
            value1 = '0';
            document.getElementById("superior").textContent = "\xa0";
            break;
        case 'pi':
            value1 = '3.141592653589793';
            operatorIsActive = true;
            break;            
        case 'plusminus':
            value1 = plusminus(value1);
            operatorIsActive = true;
            break;
        case 'squareroot':
            if (value1 != ""){
                value1 = squareroot(value1);
            }
            operatorIsActive = true;
            break;
        case 'power':
            value2 = value1;
            operator = "power"
            document.getElementById("superior").textContent = value2+" ^";
            operatorIsActive = true;
            break;
        case 'factorial':
            if (value1 < 0){
                value1 = 'Undefined';
            } else if (value1 == 0){
                value1 = 1;
            } else {
                value1 = factorial(value1);
            }
            operatorIsActive = true;
            break;
        case 'fraction':
            if (value1 != ""){
                value1 = fraction(value1);
            }
            operatorIsActive = true;
            break;
        case 'sum':
        case '+':
            value2 = value1;
            operator = "sum"
            document.getElementById("superior").textContent = value2+" +";
            operatorIsActive = true;
            break;
        case 'subtract':
        case '-':
            value2 = value1;
            operator = "subtract"
            document.getElementById("superior").textContent = value2+" -";
            operatorIsActive = true;
            break;
        case 'multiply':
        case '*':
            value2 = value1;
            operator = "multiply"
            document.getElementById("superior").textContent = value2+" *";
            operatorIsActive = true;
            break;
        case 'division':
        case '/':
            value2 = value1;
            operator = "division"
            document.getElementById("superior").textContent = value2+" /";
            operatorIsActive = true;
            break;
        case 'equal':
        case 'Enter':
            value1 = equal();
            value2 = '';
            document.getElementById("superior").textContent = "\xa0";
            operatorIsActive = true;
        
    }
    document.getElementById("lastinput").textContent = value1;
    
}

function equal() {
    switch(operator) {
        case 'sum':
            return Number(value2)+Number(value1);
        case 'subtract':
            return Number(value2)-Number(value1);
        case 'multiply':
            return value2*value1;
        case 'division':
            return value2/value1;
        case 'power':
            return value2**value1;
        
    }
}
