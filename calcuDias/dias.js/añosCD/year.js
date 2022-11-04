function dias() {
    let total = document.getElementById("total");
    let totalV = total.value;
    totalV = Number(totalV);
    //total: total de la cuenta
    let seg = 1
    let min = 60 * seg
    let hor = 60 * min
    let dia = 24 * hor
    const acumulado = document.getElementById("acumulado");
    //acumulado: el texto del total de la cuenta

    let totalOp = totalV * dia

    const diasTot1 = totalOp / seg;
    const diasTot2 = totalOp / min;
    const diasTot3 = totalOp / hor;
    //cuentaTot: cuenta total con imopuestos más propina

    if (totalV < 2) {
        acumulado.innerText = `Desde hace ${totalV} día hay ${diasTot1} segundos, ${diasTot2} minutos y ${diasTot3} horas`
    } else {
        acumulado.innerText = `Desde hace ${totalV} días hay ${diasTot1} segundos, ${diasTot2} minutos y ${diasTot3} horas`
    }
    

}