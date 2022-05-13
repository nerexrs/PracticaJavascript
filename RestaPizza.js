function onClickPizzas() {
    let pizzas = document.getElementById("Pizzas");
    let valorPizzas = pizzas.value
    let pizzasRestantes = document.getElementById("PizzasRestantes");
    let valorPizzasRestantes = pizzasRestantes.value;

    const operacionPizzas = valorPizzas - valorPizzasRestantes;

    const resultadoPizzas = document.getElementById("ResultadoPizzas");

    resultadoPizzas.innerText = "Tus pizzas restantes son: " + operacionPizzas

}