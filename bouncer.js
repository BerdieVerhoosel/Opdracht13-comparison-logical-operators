
const age = 24;
if (age < 18) {
    console.log("You are not old enough, you can not enter..");

} else if (age >= 18 && age <= 25) {
    console.log("Welcome! You get 50% off!")

} else if (age > 25) {
    console.log("You are old enough to enter, welcome!");

}

const isFemale = true;
if (isFemale) {
    console.log("Welcome to ladies night!");
} else {
    console.log("It's ladies night, see you another time!")
}

const driverStatus = "bob";
if (driverStatus == "bob") {
    console.log("Drive save and a good night!");
} else {
    console.log("You can not drive, call a taxi please.")
}

const firstName = "Sarah";
if (firstName == "Sarah" || firstName == "Bram") {
    console.log("Congrats Sarah or Bram, you get a free beer on the house!")
}

const totalAmount = 75;
if (totalAmount >= 100) {
    console.log("You spend 100 euro's or more. You get a free bottle of champagne!");
} else if (totalAmount >= 50 && totalAmount < 100) {
    console.log("You spend between 50 euro's and 100 euro's. You get a free portion of nachos!");
} else if (totalAmount >= 25 && totalAmount < 50) {
    console.log("You spend between 25 euro's and 50 euro's. You get free veggie bitterballen!");
}