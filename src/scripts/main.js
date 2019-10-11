console.log("this page is linked");
// object of my pet
const myPet = {
    name: "Kitty",
    species: "cat",
    nicknames: ["Kitty", "damn cat", "ieskdshsks"],
    age: 9
}
// console.log("first myPet", myPet);
// sounds function for myPet
myPet.meow = function() {
    console.log("MROWWWWW");
}
// rub function for myPet
myPet.furBomb = function() {
    console.log("rrrruuubbb");
}
// hide function for myPet
myPet.hide = function() {
    console.log("It's a mower - head for the woods!");
}

// console.log("second myPet", myPet);
// calling myPet.meow
myPet.meow();
// calling myPet.furBomb
myPet.furBomb();
// calling myPet.hide
myPet.hide();