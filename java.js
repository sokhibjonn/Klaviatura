
let numberOfButtons = document.querySelectorAll(".drum").length; //7
// console.log(numberOfButtons);

for (let i = 0; i < numberOfButtons; i++) {
 document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    let buttonInnerHtml = this.innerHTML;//j
    // console.log(this.innerHTML);
    makesound(buttonInnerHtml)  //j
    buttonAnimation(buttonInnerHtml);
})
}




document.addEventListener("keypress", function(event){
    // console.log(event);
    let pressedButton = event.key;
    makesound(pressedButton);
    buttonAnimation(pressedButton)
})
  



function makesound(key) {
switch (key){
    case "q":
      let tom1 = new Audio("1.mp3")
      tom1.play();
      break;
    case "w":
        let tom2 = new Audio("1.mp3")
        tom2.play();
        break;
     case "e":
        let tom3 = new Audio("1.mp3")
        tom3.play();
        break;
     case "r":
        let tom4 = new Audio("1.mp3")
        tom4.play();
        break; 
    case "t":
        let tom5 = new Audio("1.mp3")
        tom5.play();
        break;
     case "y":
        let tom6 = new Audio("1.mp3")
        tom6.play();
        break;
    case "u":
            let tom7 = new Audio("1.mp3")
            tom7.play();
            break;
            case "i":
                let tom8 = new Audio("1.mp3")
                tom8.play();
                break; 
            case "o":
                let tom9 = new Audio("1.mp3")
                tom9.play();
                break;
                case "p":
                    let tom10 = new Audio("1.mp3")
                    tom10.play();
                    break;
                    case "a":
        let tom11 = new Audio("1.mp3")
        tom11.play();
        break;
        case "s":
        let tom12 = new Audio("1.mp3")
        tom12.play();
        break;
        case "d":
        let tom13 = new Audio("1.mp3")
        tom13.play();
        break;
        case "f":
        let tom14 = new Audio("1.mp3")
        tom14.play();
        break;
        case "g":
        let tom15 = new Audio("1.mp3")
        tom15.play();
        break;
        case "h":
        let tom16 = new Audio("1.mp3")
        tom16.play();
        break;
        case "j":
        let tom17 = new Audio("1.mp3")
        tom17.play();
        break;
        case "k":
        let tom18 = new Audio("1.mp3")
        tom18.play();
        break;
        case "l":
        let tom19 = new Audio("1.mp3")
        tom19.play();
        break;
        case "z":
        let tom20 = new Audio("1.mp3")
        tom20.play();
        break;
        case "x":
        let tom21 = new Audio("1.mp3")
        tom21.play();
        break;
        case "c":
        let tom22 = new Audio("1.mp3")
        tom22.play();
        break;
        case "v":
        let tom23 = new Audio("1.mp3")
        tom23.play();
        break;
        case "b":
            let tom24 = new Audio("1.mp3")
            tom24.play();
            break;
            case "n":
        let tom25 = new Audio("1.mp3")
        tom25.play();
        break;
        case "m":
        let tom26 = new Audio("1.mp3")
        tom26.play();
        break;

            default:console.log("error");
}
}

function buttonAnimation(door) {
let activeButton = document.querySelector("." + door)
console.log(activeButton);
activeButton.classList.add("pressed")
setTimeout(function (){
    activeButton.classList.remove("pressed")
} ,100)
}