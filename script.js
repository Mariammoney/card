var cardOne = document.querySelector(".card-one");
var cardTwo = document.querySelector(".card-two");
var cardThree = document.querySelector(".card-three");
var cardFour = document.querySelector(".card-four");
var cardFive = document.querySelector(".card-five");
var body = document.querySelector(".background-body");
var defaultBtn = document.querySelector("button")

cardOne.addEventListener("click", function () {
    body.style.backgroundColor = "cornflowerblue";
})
cardTwo.addEventListener("click", function () {
    body.style.backgroundColor = "pink";
})
cardThree.addEventListener("click", function () {
    body.style.backgroundColor = "darkorchid";
})
cardFour.addEventListener("click", function () {
    body.style.backgroundColor = "rgb(141, 47, 97)";
})
cardFive.addEventListener("click", function () {
    body.style.backgroundColor = "rgb(12, 12, 55)";
})

defaultBtn.addEventListener("click", btn);

function btn(){
    body.style.backgroundColor = "rgb(118, 142, 162)"
}