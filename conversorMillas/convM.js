function miKm() {
    //miKm: nombre función milla a kilometro. convM es conversor millas
    let milla = document.getElementById("milla");
    let millaV = milla.value;
    millaV = Number(millaV);
    //variable que agarra las millas que ingresa el usuario, 
    //millaV es el valor de la variable

    const m = 1;
    const km = 1000 * m;
    const kmMi = km + (609.34 * m)
    //conversión de millas

    let opMi = millaV * kmMi
    // operación cambio de milla a km

    let totalM = document.getElementById("totalM");
    //agarra la variable del parrafo que escribe el texto de abajo

    totalM.innerText = `${millaV} millas equivalen a ${opMi} kilometros`;
    //el texto de abajo que hablamos arriba
}