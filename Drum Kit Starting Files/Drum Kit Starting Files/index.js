
const BUTTONARRAY = document.querySelectorAll(".drum");

// 오디오 파일
const TOM1 = new Audio("sounds/tom-1.mp3");
const TOM2 = new Audio("sounds/tom-2.mp3");
const TOM3 = new Audio("sounds/tom-3.mp3");
const TOM4 = new Audio("sounds/tom-4.mp3");
const SNARE = new Audio("sounds/snare.mp3");
const CRASH = new Audio("sounds/crash.mp3");
const KICK = new Audio("sounds/kick-bass.mp3");

//마우스 클릭 감지
for (var i = 0; i < BUTTONARRAY.length; i++) {
  BUTTONARRAY[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
  });
}


//키보드  누름 감지
document.addEventListener("keypress", function(event){
  var eventKey = event.key;
    makeSound(eventKey);
});

//오디오 재생 함수
function makeSound(key){

  switch (key) {
    case "w":
      TOM1.play();
      break;
    case "a":
      TOM2.play();
      break;
    case "s":
      TOM3.play();
      break;
    case "d":
      TOM4.play();
      break;
    case "j":
      SNARE.play();
      break;
    case "k":
      CRASH.play();
      break;
    case "l":
      KICK.play();
      break;

    default:console.log(key);
  }
}
