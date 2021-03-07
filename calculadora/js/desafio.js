var inputValorDaHora = document.querySelector("#valor-hora")
console.log(inputValorDaHora)

var inputValorHorasProjeto = document.querySelector("#horas-projeto")
console.log(inputValorHorasProjeto)

var spanResposta = document.querySelector("#resposta")
console.log(spanResposta)

function calcular() {
    var valorTotalProjeto = (inputValorDaHora.valueAsNumber * inputValorHorasProjeto.valueAsNumber).toFixed(2)

    spanResposta.innerHTML = ("R$ ") + valorTotalProjeto
}