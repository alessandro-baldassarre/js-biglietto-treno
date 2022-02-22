

let kmRoute = parseInt(prompt("How many kilometers does the route have?"));
console.log(kmRoute);

if (!(isNaN(kmRoute))) {
    console.log("ok, the number insert is correct");
    
} else {
    alert("The number of kilometers are not valid, the program insert a random value for you");
    kmRoute = (Math.random() * 1000)+1;
    console.log(kmRoute);
}

let agePassenger = Math.floor(parseInt(prompt("how old are the passenger?")));
console.log(agePassenger);

if (!isNaN(agePassenger) && agePassenger < 110) {
    console.log("ok, the number insert is correct");
    
} else {
    alert("The age is not valid, the program insert a random value for you");
    agePassenger = Math.floor((Math.random() * 110))+1;
    console.log(agePassenger);
}

const kmPrice = 0.21;

let price = kmRoute * kmPrice;

let discount = 0;

if (agePassenger < 18) {
    console.log(price);
    discount = (price / 100) * 20;
    price -= discount;
    console.log("the price with the doscount is: " + price);

}else if (agePassenger > 65) {
    console.log(price);
    discount = (price / 100) * 40;
    price -= discount;
    console.log("the price with the discount is: " + price);
}else{
    console.log(price);
    console.log("you are not entitled for the discount");
}

price.toFixed(2); 

document.getElementById("km-route").innerHTML = `${kmRoute.toFixed(2)} km`;

document.getElementById("age-passenger").innerHTML = `${agePassenger}`;

document.getElementById("discount").innerHTML = `${discount.toFixed(2)} €`;

document.getElementById("ticket-price").innerHTML = `${price.toFixed(2)} €`;