/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let mensaje = document.getElementById("excuse");

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  const randomExcuse = arreglo => {
    let index = Math.floor(Math.random() * arreglo.length);
    return arreglo[index];
  };
  console.log("Hello Rigo from the console!");

  mensaje.textContent = `${randomExcuse(who)}
  ${randomExcuse(action)}
  ${randomExcuse(what)}
  ${randomExcuse(when)}.`;
};
