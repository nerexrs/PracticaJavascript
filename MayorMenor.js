function mayorMenor() {
    let num1 = document.getElementById("num1");
    let valueNum1 = num1.value
    valueNum1 = Number(valueNum1);
    let num2 = document.getElementById("num2");
    let valueNum2 = num2.value;
    valueNum2 = Number(valueNum2);
    let string = document.getElementById("string");

    if (valueNum1 > valueNum2) {
        string.innerText = `${valueNum1} es mayor que ${valueNum2}`;
    } else if (valueNum1 < valueNum2) {
        string.innerText = `${valueNum1} es menor que ${valueNum2}`;
    } else if (valueNum1 == valueNum2) {
        string.innerText = `${valueNum1} es igual que ${valueNum2}`;
    } 
    else {
        string.innerText = `ingresa un valor valido`;
    }


}