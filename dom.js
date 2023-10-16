// const h1 = document.querySelector("h1");
// const p = document.querySelector("p");
// const parafito = document.querySelector(".parafito");
// const pid = document.getElementById("pid");
// const input = document.querySelector("input");

// console.log(input.value);

// console.log({
//     h1,
//     p,
//     parafito,
//     pid,
//     input,
// });
// // innertHTML y innertText
// h1.innerHTML ="patito <br> feo"
// // h1.innerText ="patito <br> feo"

// // console.log(h1.getAttribute("class"))
// // h1.setAttribute("class", "rojo").

// h1.classList.add("rojo");
// h1.classList.remove("rojo");
// // h1.classList.toggle("rojo");

// input.value ="456";


// const img = document.createElement("img");
// img.setAttribute("src", "");
// console.log(img);
// // pid.innerHTML =""; // desaparece el texto del html. gg
// pid.append(img);

// ESCUCHANDO EVENTOS DESDE JS

const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#calcular");
const pResult = document.querySelector("#result")

function btnOnClick(){
    // console.log("esxuchando el evento de clicj")
    // console.log(input1.value + input2.value);
    const sumaInputs = input1.value + input2.value;
    pResult.innerHTML = "Resultado " + sumaInputs;
}