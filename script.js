// /*
// CURSO PRACTICO DE JAVASCRIPT
// 1. QUE EES UNA VARIABLE, son espacios en memoria para guardar datos informacion dependiendo los tipos y estructura de datos.
// // 2. DIREFENCIA ENTRE DECLARAR Y INICIALIZAR? 
// // */ 
// // let nombre ='limberAP' // esto es declarar
// // console.log(nombre);
// // nombre = 'fernando'
// // console.log(nombre); // inicializar es asignarle un valor
// // // 3. CUAL ES LA OPERADOR ME PERIMITE SUMAR Y CONCATENAR (es la +).
// // /*
// // nombre = 'string';
// // Apellido = "string"
// // username = "string"; (@limferth)
// // Edad = number (18, 24);
// // email = "string";
// // es mayor de edad = "bulean"
// // ahorro = number 
// // deudas = number
// // */
// let suti = 'limferth';
// let lastname = 'alanoca plata';
// let username = 'limfeth'
// let edad = 24;
// let email = 'limberth@gmail.com';
// let esMayorDeEdad = true;
// let ahorro = 5000;
// let deudas = 100;

// let nombreCompleto = suti +' '+ lastname;
// console.log(nombreCompleto);
// let dineroReal = ahorro - deudas + ' Bolivianos';
// console.log(dineroReal);
// // /*
// FUNCIONES
// 1. las funciones son la forma que encapsulamos bloques de codigos para reutilizarlos en un fututo proximo ejecutarlos.
// function completeName(parametro1, parametro2) {
//     return parametro1 + ' ' + parametro2
// }

function completeName(suti, lastname) {
    return suti + ' ' + lastname
}

// completeName('limber', 'Fernandez')     
// console.log(completeName);

// cuadno me sirve usar funciones
/*
nos serve cuando tenemos variables o bloques de codigo muy parecidos que podemos encapsular mas de una vez en el futuro, tambien nos sirve un programa o archivo

las funciones reciben parametros cuando las creamos, y les enviamos argumentos cuando las ejecutamos.

const nombre = 'limberth fer '
const apellido = 'Alanoca Plata'

const completName = nombre + apellido;

function nombreCompleto(nombre, apellido) {
    return nombre + " " + apellido
}

function saludo(nombre, apellido, userName) {
    const completName = nombreCompleto(nombre, apellido);

    console.log('Mi nombre es ' + completName + ' pero prefiero que me digas ' + userName + ' .');
}

saludo('juanita', 'Gallego', 'limferth')

/*
// CONDICIONALES
// som la forma en que ejecutamos un bloque de cofigo u otro dependiendo de alguna condicion o valudacion 
// TIPOS if, else if, switch, for 
// if else: el condicional if, esle if nos permite hacer validaciones completamente distintas (si asi lo queremos) en cada validacion o condicional.
// switch en cambio en el swirch todos los cases se comparar con la misma variable  condicion que definimos en el switch.

// las funciones pueden encapsular cualquier bloque de codigo, incluyecdo condicionales.
// */ 
// const tipoDeSuscripcion = 'free';
// switch (tipoDeSuscripcion) {
//     case 'free':
//         console.log('solo puedes tomar los cursos gratis');
//         break;
//     case 'basic':
//     console.log('puedes tomar casi todos los cursos durante un mes');
//         break;
//     case 'expert':
//         console.log('puedes tomar casi todos los cursos de platzi durante un ano');
//         break;
//     case 'expertDuo':
//         console.log('puedes tomar todos los cursos durante un anio');
//     default:
//         console.log('no tienes suscripcion');
//         break;
// }

// if (tipoDeSuscripcion == 'free') {
//     console.log('solo puedes tomar los cursos gratis');
// } else if (tipoDeSuscripcion == 'basic') {
//     console.log('puedes tomar casi todos los cursos de platsi durante un mes');
// } else if (tipoDeSuscripcion == 'expert') {
//     console.log('puedes tomar casi todos los cursos durante un anio');
// } else if (tipoDeSuscripcion == 'expertDuo') {
//     console.log('puedes tomar todos los cursos + una cuenta gratis');
// } else {
//     console.log('no estas suscrito');
// }
// /* 
// CICLOS
// QUE ES UN CICLO, es l forma de ejecutar un vloque de codigo hasta que se cumpla una condicion. evitar ciclos infinitos
// TIPOS DE CICLOS
// while, for, do while
// se puede mesclar ciclos y condicionalesm si aunque los cilos son una especie de condicionales, nada nos impide agrefar mas condicionales dentro del ciclo.
// // */ 
// for (let i = 0;  i < 5; i++) {
//     console.log("e; valor de i es: "+ i);
// }

// let i = 0;
// while (i < 5) {
//     console.log('el valor de i es ' + i);
//     i++;
// }
// for (let i = 10; i >= 2; i--) {
//     console.log('el valor de i es  ' + i)
// }

// let a = 10
// while (a >= 2) {
//     console.log('eres menor de edad de ninio ' + a);
//     a--;
// }

// // EJEMPLO
// // let respuesta;
// // while (respuesta != 4) {
// //     let pregunta = prompt('cuanto es mas 2 + 2');
// //     respuesta = pregunta;
// // }
// /*
// ARRAYS Y OBJETOS
// que es un array, es una lista de elementos.
// ELEMPLO
// const array = [1, jaja, true, false]
// QUE ES UN OBJETO, es una lista de elementos PERO cada elemento tiene un nombre clave.
// EJEMPLO 
// const objet ={
//     nombre: 'fulanito';
//     edad: 3;
//     CUANDO UTILIZAR ARRAYS O OBJETOSarrays cuando lo que haremos en un elemento es lo mismo en todo lo demas, mientras que un objetos mierntras que los nombres de cada elemento son importantes para nuestro algoritmo.

//     si, los arrays pueden guardas objetos y los objetos pueden guardar arrays entre sus propiedades.
//     EJEMPLO
//     const objet ={
//     nombre: 'fulanito';
//     edad: 3;
//     coidaFavorita: ["pollo", "vagetales"];
// };

// const array = [1, jaja, true, false {nombre: "lala", edad: "19"}];
// */ 
// function imprimirPrimerElementoArray(arr) {
//     console.log(arr[1]);
// }
// imprimirPrimerElementoArray(['juanita', 'limber', 'natalia']);

// function imprimirelementoxElemento(arrai) {
//     for(let i = 0; i  < arrai.length; i++) {
//         console.log(arrai[i])
//     }

// }
// imprimirelementoxElemento(['ferths', 'jacobo', 'emma', 'prueba']);

// const obj = {
//     nombre:"fulanito",
//     edad: 3,
//     coidaFavorita: ["pollo", "vagetales"], // no olvdemos las comas son comas 
// }
// function printObjets(obj) {
//     const arries = Object.values(obj);
//     for (let i = 0; i < arries.length; i++); {
//         console.log(arries[i])
//     }
// // }
// printObjets(obj)
/* dia 19/09/2023  manipulacion del DOM*/
// const h1 = document.querySelector('h1');
// const p = document.querySelector('p');
// const clase = document.querySelector('claseaso');
// const ide = document.querySelector('ideaso');
// const input = document.querySelector('input');
// console.log(h1)
// console.log ({
//     h1,
//     p,
//     clase,
//     ide,
//     input,
// });
// h1.innerHTML ='patito <br> deo';
// console.log(h1.getAttribute("class"));

// h1.setAttribute('class', 'rojo')

// h1.classList.add('amarillo');

// h1.classList.toggle('rojo');

// const img = document.createElement('span')
// // umg.setAttribute('src', );
// // pad.appemd(img)

// Btn.addEventListener('click', btnOnClick);
