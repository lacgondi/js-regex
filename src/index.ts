import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';

let nameRegex = /[aA-zZ]{1,}/;
let countryRegex = /[aA-zZ]{1,}/;
let cityRegex = /[aA-zZ]{1,}/;
let addressRegex = /[aA-zZ 1-9]{1,}/;
let zipRegex = /[A-Z1-9]{1,}/;
let cardNumberRegex = /[1-9]{4,4}-[1-9]{4,4}-[1-9]{4,4}-[1-9]{4,4}/;
let ccvRegex = /[1-9]{3,3}/;
let cardNameRegex = / [aA-zZ ]{1,}/;

document.addEventListener("DOMContentLoaded", () => {
  let name = document.getElementById("name") as HTMLInputElement;
  let country = document.getElementById("country")as HTMLInputElement;
  let city = document.getElementById("city")as HTMLInputElement;
  let address = document.getElementById("address")as HTMLInputElement;
  let zip = document.getElementById("zip")as HTMLInputElement;
  let cardNum = document.getElementById("cardNum")as HTMLInputElement;
  let ccv = document.getElementById("ccv")as HTMLInputElement;
  let cardName = document.getElementById("cardName")as HTMLInputElement;

  document.getElementById("pay")!.addEventListener("click", () => {
    let check = false;
    if (!nameRegex.test(name.value)) {
      document.getElementById("nameErr")!.textContent = "Hibás név";
      document.getElementById("nameErr")!.style.color = "red";
      check = false;
    } else {
      document.getElementById("nameErr")!.textContent = "";
      check = true;
    }
    if (!countryRegex.test(country.value)) {
      document.getElementById("countryErr")!.textContent = "Hibás ország";
      document.getElementById("countryErr")!.style.color = "red";
      check = false;
    } else {
      document.getElementById("countryErr")!.textContent = "";
      check = true;
    }
    if (!cityRegex.test(city.value)) {
      document.getElementById("cityErr")!.textContent = "Hibás város";
      document.getElementById("cityErr")!.style.color = "red";
      check = false;
    } else {
      document.getElementById("cityErr")!.textContent = "";
      check = true;
    }
    if (!addressRegex.test(address.value)) {
      document.getElementById("addressErr")!.textContent = "Hibás cím";
      document.getElementById("addressErr")!.style.color = "red";
      check = false;
    } else {
      document.getElementById("addressErr")!.textContent = "";
      check = true;
    }
    if (!zipRegex.test(zip.value)) {
      document.getElementById("zipErr")!.textContent = "Hibás irányítószám";
      document.getElementById("zipErr")!.style.color = "red";
      check = false;
    } else {
      document.getElementById("zipErr")!.textContent = "";
      check = true;
    }
    if (!cardNumberRegex.test(cardNum.value)) {
      document.getElementById("cNumErr")!.textContent = "Hibás bankkártya szám";
      document.getElementById("cNumErr")!.style.color = "red";
      check = false;
    } else {
      document.getElementById("cNumErr")!.textContent = "";
      check = true;
    }
    if (!ccvRegex.test(ccv.value)) {
      document.getElementById("ccvErr")!.textContent = "Hibás biztonsági kód";
      document.getElementById("ccvErr")!.style.color = "red";
      check = false;
    } else {
      document.getElementById("ccvErr")!.textContent = "";
      check = true;
    }
    if (!cardNameRegex.test(cardName.value)) {
      document.getElementById("cNameErr")!.textContent = "Hibás bankkártya név";
      document.getElementById("cNameErr")!.style.color = "red";
      check = false;
    } else {
      document.getElementById("cNameErr")!.textContent = "";
      check = true;
    }

    if(check){
        alert('Sikeres fizetés!');
    }
  });
});
