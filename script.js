const age = 18;
const isFemale = true;
const driverStatus = "bob";
const ageDiscount = 18;
const firstName = "Sarah";
const totalAmount = 55;

if (age >= 18) {
    console.log("You are 18 or older, you may enter the pub")
} else {
    console.log("Sorry you're under 18, you are not allowed to enter");
}

if (isFemale) {
    console.log("We wish you a lovely ladies night!");
} else {
    console.log("Sorry, ladies only!");
}

if (driverStatus === "bob"){
    console.log("You are the bob, you are allowed to drive");
} else {
    console.log("You're not a bob, shall I call a cab?");
}

if (ageDiscount >= 18 && ageDiscount <= 25){
    console.log("You get 50% off your beer!");
}

if (firstName === "Sarah" || firstName === "Bram"){
    console.log("You're name is Sarah or Bram, you get a free beer!");
} else {
    console.log("Sorry, you are not participating in our Sarah Abraham promotion");
}

if (totalAmount >= 100) {
    console.log("You get a free bottle of champagne!");
} else if (totalAmount > 50) {
    console.log("You get a free portion of nachos!");
} else if (totalAmount > 25) {
    console.log("You get free (vega) bitterballs!");
} else {
    console.log("Unfortunately you don't get a discount, but it's nice to have you!");
}