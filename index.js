let nameRegex = /[aA-zZ]{1,}/;
let countryRegex = /[aA-zZ]{1,}/;
let cityRegex = /[aA-zZ]{1,}/g;
let addressRegex = /[aA-zZ 1-9]{1,}/g;
let zipRegex = /[A-Z1-9]{1,}/g;
let cardNumberRegex = /[1-9]{4,4}-[1-9]{4,4}-[1-9]{4,4}-[1-9]{4,4}/g;
let ccvRegex=/[1-9]{3,3}/g;
let cardNameRegex = / [aA-zZ ]{1,}/g;

document.addEventListener('DOMContentLoaded', ()=>{
    let name=document.getElementById('name');
    let country=document.getElementById('country');
    let city=document.getElementById('city');
    let address=document.getElementById('address');
    let zip=document.getElementById('zip');
    let cardNum=document.getElementById('cardNum');
    let ccv=document.getElementById('ccv');
    let cardName=document.getElementById('cardName');

    document.getElementById('pay').addEventListener('click', ()=>{
        if(!nameRegex.test(name.value)){
            document.getElementById('nameErr').textContent='Hibás név';
            document.getElementById('nameErr').style.color='red';
        }else{
            document.getElementById('nameErr').textContent='';
        }
        if(!countryRegex.test(country.value)){
            document.getElementById('countryErr').textContent='Hibás ország';
            document.getElementById('countryErr').style.color='red';
        }else{
            document.getElementById('countryErr').textContent='';
        }
        if(!cityRegex.test(city.value)){
            document.getElementById('cityErr').textContent='Hibás város';
            document.getElementById('cityErr').style.color='red';
        }else{
            document.getElementById('cityErr').textContent='';
        }
        if(!addressRegex.test(address.value)){
            document.getElementById('addressErr').textContent='Hibás cím';
            document.getElementById('addressErr').style.color='red';
        }else{
            document.getElementById('addressErr').textContent='';
        }
        if(!zipRegex.test(zip.value)){
            document.getElementById('zipErr').textContent='Hibás irányítószám';
            document.getElementById('zipErr').style.color='red';
        }else{
            document.getElementById('zipErr').textContent='';
        }
        if(!cardNumberRegex.test(cardNum.value)){
            document.getElementById('cNumErr').textContent='Hibás bankkártya szám';
            document.getElementById('cNumErr').style.color='red';
        }else{
            document.getElementById('cNumErr').textContent='';
        }
        if(!ccvRegex.test(ccv.value)){
            document.getElementById('ccvErr').textContent='Hibás biztonsági kód';
            document.getElementById('ccvErr').style.color='red';
        }else{
            document.getElementById('ccvErr').textContent='';
        }
        if(!cardNameRegex.test(cardName.value)){
            document.getElementById('cNameErr').textContent='Hibás bankkártya név';
            document.getElementById('cNameErr').style.color='red';
        }else{
            document.getElementById('cNameErr').textContent='';
        }
        
    })
})