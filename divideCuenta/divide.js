function divideCuenta() {
    let total = document.getElementById("total");
    let totalV = total.value;
    totalV = Number(totalV);
    //total: total de la cuenta
    let personas = document.getElementById("personas");
    let personasV = personas.value;
    personasV = Number(personasV);
    // personas: personas a dividir la cuenta
    let impuestos = document.getElementById("impuestos");
    let impuestosv = impuestos.value;
    impuestosv = Number(impuestosv);
    //impuestos: impuestos de la cuenta
    let propina = document.getElementById("propina");
    let propinaV = propina.value;
    propinaV = Number(propinaV);
    //propina: propina de la cuenta, si no hay se pone 0 pero pendiente cambiar
    //a un if que permita decidir si propina o no
    const cuenta = document.getElementById("cuenta");
    //cuenta: el texto del total de la cuenta
    

    const cuentaTot = totalV + impuestosv + propinaV;
    //cuentaTot: cuenta total con imopuestos más propina
    const pagar = cuentaTot / personasV
    //pagar: el total a pagar de cada persona en la que se dividió la cuenta


    cuenta.innerText = "Tu cuenta total es: " + cuentaTot + 
    " Y lo que debe pagar cada uno es: " + pagar

}
//La V mayuscula al final de la variable significa que es la variable del id
// una vez que ya se agarr+p eñ gEbI