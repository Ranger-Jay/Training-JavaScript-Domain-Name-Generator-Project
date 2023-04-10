/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-url").innerHTML = generateExcuse();
  });
  console.log("Hello Jay from the console!");
};

let generateExcuse = () => {
  let pronoun = ['the','our'];
  let adjective = ['great','big'];
  let noun = ['jogger','racoon'];
  let com = ['com','us','info','net'];

  let proIndex = Math.floor(Math.random() * pronoun.length);
  let adjIndex = Math.floor(Math.random() * adjective.length);
  let nounIndex = Math.floor(Math.random() * noun.length);
  let comIndex = Math.floor(Math.random() * possession.length);

  return (
    pronoun[proIndex] +
    " " +
    adjective[adjIndex] +
    " " +
    noun[nounIndex] +
    " " +
    com[comIndex] +
  );
};
