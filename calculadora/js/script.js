var inputGanhoPorMes = document.querySelector("#ganho-mes")

var inputHorasPorDia = document.querySelector("#horas-dia")

var spanHora = document.querySelector("#resposta")

console.log(spanHora)
console.log(inputGanhoPorMes)
console.log(inputHorasPorDia)

function calcularValorHora() {

    var qtdHorasMes = inputHorasPorDia.valueAsNumber * 22

    var valorHora = (inputGanhoPorMes.valueAsNumber / qtdHorasMes).toFixed(2)

    spanHora.textContent = ("R$" + valorHora)
        
}