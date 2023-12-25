/*

*/ 

const h1 = document.querySelector("h1");
const p = document.querySelectorAll("p");
const parrafito = document.querySelector(".parrafito");
const pid = document.querySelector('#pid');
const input = document.querySelector("input");

console.log(input.value="123");

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = 'limferth es alfa <br> feo'
// console.log(h1.getAttribute('class')); // sirve apara llamar atributos
// console.log(h1.setAttribute('class', 'mine')) // sirve para modificar atributos

h1.classList.add('rojo') // para agregar atributos
h1.classList.remove('rojo')
// h1.classList.toggle('rojo')
//h1.classList.contains('rojo')


// console.log(document.createElement('img'))

const img = document.createElement('img');

img.setAttribute('src', 'https://www.solvetic.com/uploads/monthly_05_2019/tutorials-9832-0-55361300-1557215199.png')

console.log(img);
pid.append(img);