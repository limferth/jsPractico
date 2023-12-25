/*

*/ 

const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector('#calculo2');
const botonCalcular = document.querySelector('#botonCalcular');
const pResult = document.querySelector('#result')

function botonOnClick (){
    // console.log('escuchando el evento de click')
    const sumaInputs = +input1.value + +input2.value;
    pResult.innerText = 'Resultado: ' + sumaInputs;
}
