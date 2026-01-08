import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['Mi perro', 'Mi abuela', 'El repartidor', 'Mi loro', 'Mi vecino', 'Un alien', 'Mi profesor de yoga', 'El panadero', 'Un ninja', 'Mi gato', 'Un fantasma', 'Mi primo pequeño', 'Un robot'];

let action = ['se comió', 'se llevó', 'destrozó', 'mojó', 'quemó', 'escondió', 'tiró por la ventana', 'confundió con comida', 'pisoteó', 'secuestró', 'rompió sin querer', 'convirtió en origami', 'perdió en un taxi'];

let what = ['mis deberes', 'mi móvil', 'mi mochila', 'mi ordenador', 'mi desayuno', 'mi proyecto final', 'mi cuaderno', 'mi bicicleta', 'mi bocadillo', 'mi tarjeta del bus', 'mi mando de la consola', 'mi botella de agua', 'mi agenda'];

let when = ['antes de clase', 'mientras dormía', 'cuando estaba en el baño', 'durante el almuerzo', 'cuando iba de camino', 'mientras meditaba', 'cuando estaba a punto de salir', 'mientras hacía la compra', 'cuando estaba en la ducha', 'mientras hablaba con mi madre', 'cuando estaba calentando la comida', 'mientras paseaba al perro', 'cuando estaba estudiando'];


let randomWho = Math.floor(Math.random() * who.length);
let randomAction = Math.floor(Math.random() * action.length);
let randomWhat = Math.floor(Math.random() * what.length);
let randomWhen = Math.floor(Math.random() * when.length);

let whoSelection = who[randomWho];
let actionSelection = action[randomAction];
let whatSelection = what[randomWhat];
let whenSelection = when[randomWhen];

let phrase = `${whoSelection} ${actionSelection} ${whatSelection} ${whenSelection}`;




window.onload = function () {
  document.getElementById("excuse").innerHTML = phrase;

  document.getElementById("btn").addEventListener("click", () => {
    let randomWho = Math.floor(Math.random() * who.length);
    let randomAction = Math.floor(Math.random() * action.length);
    let randomWhat = Math.floor(Math.random() * what.length);
    let randomWhen = Math.floor(Math.random() * when.length);

    let whoSelection = who[randomWho];
    let actionSelection = action[randomAction];
    let whatSelection = what[randomWhat];
    let whenSelection = when[randomWhen];

    let phrase = `${whoSelection} ${actionSelection} ${whatSelection} ${whenSelection}`;
    document.getElementById("excuse").innerHTML = phrase;
  });

  console.log("Hello Rigo from the console!");
};
