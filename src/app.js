import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector('.card').classList.add(generateRandomSuit());
  document.querySelector('.card').innerHTML = gerateRandomNumber();
};

let gerateRandomNumber =() => {
  let numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
}
let generateRandomSuit =() =>{
  let suit = [ "diamond", "spade", "heart", "club"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};

