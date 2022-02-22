
const firstName = prompt("What's your first name?");
document.getElementById("first-name").innerHTML = firstName;

const lastName = prompt("What's your last name?");
document.getElementById("last-name").innerHTML = lastName;

const favColor = prompt("What's your favourite color?");
document.getElementById("fav-color").innerHTML = favColor;

let genPsw = firstName + lastName + favColor + 21;
document.getElementById("genereted-psw").innerHTML = genPsw;