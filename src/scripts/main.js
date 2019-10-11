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
myPet.meow = function () {
    console.log("MROWWWWW");
}
// rub function for myPet
myPet.furBomb = function () {
    console.log("rrrruuubbb");
}
// hide function for myPet
myPet.hide = function () {
    console.log("It's a mower - head for the woods!");
}

// console.log("second myPet", myPet);
// calling myPet.meow
myPet.meow();
// calling myPet.furBomb
myPet.furBomb();
// calling myPet.hide
myPet.hide();

myPet.favoriteToys = [];
myPet.play = function (toy) {
    // random generator to see if like toy is true
    if (Math.random() * 10 < 5) {
        this.favoriteToys.push(toy);
        // console log to ensure code worked if item not pushed to array
    } else {
        console.log("she doesn't like that toy");
    }
}
// calling function to prove works
myPet.play("string");
// console log to see array item in place from push
console.log("my pet", myPet);
