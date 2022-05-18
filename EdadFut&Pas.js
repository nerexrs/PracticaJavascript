function calcularEdad() {
    let name = document.getElementById("Name");
    let valueName = name.value
    let age = document.getElementById("Age");
    let valueAge = age.value;
    valueAge = Number(valueAge);

    let operationPas = valueAge - 1;

    let operationFut = valueAge + 1;

    let ageFutPas = document.getElementById("AgeFutPas");

    ageFutPas.innerText = `${valueName} el año pasado tenías ${operationPas} años y el próximo cumplirás ${operationFut} años`;

}