// 내꺼
// const FIRSTDICE = randomNumber();
// const SECONDDICE = randomNumber();
//
// function randomNumber(){
//   var number = Math.floor(Math.random()*6)+1;
//   return number;
// }
//
// function changeDice(){
//   document.querySelector(".img1").setAttribute("src","images/dice"+FIRSTDICE+".png");
//   document.querySelector(".img2").setAttribute("src","images/dice"+SECONDDICE+".png");
// }
//
// function compareDice(){
//   if(FIRSTDICE>SECONDDICE){
//     document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
//   } else if(FIRSTDICE === SECONDDICE){
//     document.querySelector("h1").innerHTML = "Draw!";
//   } else{
//     document.querySelector("h1").innerHTML = "Player 2 Win!🚩";
//   }
// }
//
// function init(){
//   changeDice();
//   compareDice();
// }
//
// init();


// 안젤라꺼

var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage = "dice"+randomNumber1+".png";

var randomImageSource = "images/"+randomDiceImage;

var image1 = document.querySelectorAll("img")[0]

image1.setAttribute("src",randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage = "dice"+randomNumber2+".png";

var randomImageSource = "images/"+randomDiceImage;

var image2 = document.querySelectorAll("img")[1]

image2.setAttribute("src",randomImageSource);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}else {
    document.querySelector("h1").innerHTML = "Draw!";
}
