//----------------------------------------------- Vending Machine

// Create 'total' variable
// Create a button
// Set value of button
// when clicked, add value of button to 'total'
// replace innertext of #totalPrice ID with 'total'

let total = 0;

//variables for buttons
const LimeCola = document.getElementById("limeCola");
const Peanuts = document.getElementById("peanuts");
const ChocolateBar = document.getElementById("chocolateBar");
const Gummies = document.getElementById("gummies");

//variables for prices
const addColaPrice = LimeCola.value;
const addPeanutsPrice = Peanuts.value;
const addChocolateBarPrice = ChocolateBar.value;
const addGummiesPrice = Gummies.value;

const totalPrice = document.getElementById("totalPrice");

    LimeCola.onclick = function() {
        total += parseInt(addColaPrice);
        totalPrice.innerText = `$${total}.00`;
        };
    Peanuts.onclick = function() {
        total += parseInt(addPeanutsPrice);
        totalPrice.innerText = `$${total}.00`;
        };
    ChocolateBar.onclick = function() {
        total += parseInt(addChocolateBarPrice);
        totalPrice.innerText = `$${total}.00`;
        };
    Gummies.onclick = function() {
        total += parseInt(addGummiesPrice);
        totalPrice.innerText = `$${total}.00`;
        };  
//----------------------------------------------- Make Money


// Set variables for accessing ID elements in HTML, to manipulate.
const theForm = document.getElementById("theForm");
const amountInput = document.getElementById("amount");
const coinTypeInput = document.getElementById("coinType");
const theList = document.getElementById("theList");

// Create eventListener for when the Submit ("Make Money") button is clicked
theForm.addEventListener("submit", (event) => {
    event.preventDefault();
// Set variables for each input value   
    let amount = amountInput.value;
    let coinType = coinTypeInput.value;

    console.log(amount, coinType);

// Make for loop to repeat createElement...
// ...each time the button is clicked
// Make it a circle
// Add coin type in center of circle

for (i = 0 ; i < amount; i++) {
    const coinItem = document.createElement("li");
    coinItem.innerText = coinType;
//all the *style* tags could be in CSS file under "li" 
    coinItem.style.margin = "auto";
    coinItem.style.padding = "35px";
    coinItem.style.backgroundColor = "lightgray";
    coinItem.style.borderRadius = "50%";
    coinItem.style.display = "inline-block";

// this eventListener removes the coin upon click
coinItem.addEventListener("click", () => {
    coinItem.remove();
})
// use .append to add item to theList
    theList.append(coinItem)
};
}
);

//-------------light bulb code
const lightBulb = document.getElementById("lightBulb");

const onButton = document.getElementById("on");
const offButton = document.getElementById("off");
const toggleButton = document.getElementById("toggle");
const endButton = document.getElementById("end");

onButton.addEventListener("click", ()=>{
    lightBulb.style.background = "yellow";
    lightBulb.style.color = "black";
});

offButton.addEventListener("click", ()=>{
    lightBulb.style.background = "darkgrey";
    lightBulb.style.color = "white";
});

toggleButton.addEventListener("click", ()=>{
    if (lightBulb.style.background === "yellow") {
        lightBulb.style.background = "darkgrey";
        lightBulb.style.color = "white";
    } else {
        lightBulb.style.background = "yellow";
        lightBulb.style.color = "black";
    };
});

endButton.addEventListener("click", ()=>{
    lightBulb.remove();

    onButton.disabled = true;
    onButton.style.backgroundColor = "lightgrey";

    offButton.disabled = true;
    offButton.style.backgroundColor = "lightgrey";

    toggleButton.disabled = true;
    toggleButton.style.backgroundColor = "lightgrey";

    endButton.disabled = true;
    endButton.style.backgroundColor = "lightgrey";
});