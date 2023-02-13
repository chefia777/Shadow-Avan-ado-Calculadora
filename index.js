const button = document.querySelector("button");
const custototal = document.querySelector("#custoTotal");
const target = document.querySelector("#refinoDesejado");
const minerioNormal = document.querySelector("#minerioNormal");
const refino = document.querySelector("#refino");
const minerioPerfeito = document.querySelector("#minerioPerfeito");
const precoDaMoeda = document.querySelector("#precoMoeda");
const preco = document.querySelector("#preco");

button.addEventListener("click", function() {
    refino.innerHTML = 0;
    minerioNormal.innerHTML = 0;
    minerioPerfeito.innerHTML = 0;
    const targetRefinement = Number(target.value); // the desired refinement level
    while (Number(refino.innerHTML) < targetRefinement) {
        const chance = Math.random() * 100;
        console.log(chance);
        if (refino.innerHTML < 4) {
            refino.innerHTML = Number(refino.innerHTML) + 1;
            minerioNormal.innerHTML = Number(minerioNormal.innerHTML) + 1;
        } else {
        if (refino.innerHTML == 4 && chance < 60) {
            refino.innerHTML = Number(refino.innerHTML) + 1;
            minerioPerfeito.innerHTML = Number(minerioPerfeito.innerHTML) + 1;
        } else if (
            (refino.innerHTML == 5 && chance < 40) ||
            (refino.innerHTML == 6 && chance < 40) ||
            (refino.innerHTML == 7 && chance < 20) ||
            (refino.innerHTML == 8 && chance < 20) ||
            (refino.innerHTML == 9 && chance < 9)
        ) {
            refino.innerHTML = Number(refino.innerHTML) + 1;
            minerioPerfeito.innerHTML = Number(minerioPerfeito.innerHTML) + 1;
        } else {
            refino.innerHTML = Number(refino.innerHTML) - 1;
            minerioPerfeito.innerHTML = Number(minerioPerfeito.innerHTML) + 1;
        }
        }
    }
    preco.innerHTML = Number(precoDaMoeda.value) * 30 * Number(minerioPerfeito.innerHTML);
});
