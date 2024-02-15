// fetch elements
let pcImg = document.querySelector(".pc-img");
let imgUser = Array.from(document.querySelectorAll(".img-user"));
let result = document.querySelector(".result");
let preventPlaying = document.querySelector(".disabled");
// generate pc choice randomly
let randomNum = Math.trunc(Math.random() * 3);
pcImg.src = imgUser[randomNum].src;
// console.log(pcImg.src);
// create vARIABLES FOR CHOICES
let userChoice = "";
function getPcChoice() {
  if (pcImg.src == imgUser[0].src) {
    return "rock";
  } else if (pcImg.src == imgUser[1].src) {
    return "paper";
  } else return "scissors";
}

let pcChoice = `${getPcChoice()}`;

imgUser.forEach((img) => {
  function reset() {
    pcImg.classList.add("blur");
    randomNum = Math.trunc(Math.random() * 3);
    pcImg.src = imgUser[randomNum].src;
    result.textContent = "النتيجة";
    preventPlaying.classList.remove("show");
  }

  img.addEventListener("click", function () {
    pcImg.classList.remove("blur");
    userChoice = img.getAttribute("data-choice");
    pcChoice = `${getPcChoice()}`;
    if (pcChoice === userChoice) {
      console.log("تعادل");
      result.textContent = "تعادل";
      preventPlaying.classList.add("show");
      setTimeout(reset, 3000);
    } else if (userChoice == "rock") {
      if (pcChoice == "scissors") {
        console.log("user won");
        result.textContent = "فوز";
        preventPlaying.classList.add("show");

        setTimeout(reset, 3000);
      } else if (pcChoice == "paper") {
        console.log("user lost");
        result.textContent = "خسارة";
        preventPlaying.classList.add("show");

        setTimeout(reset, 3000);
      }
    } else if (userChoice == "scissors") {
      if (pcChoice == "paper") {
        console.log("user win");
        result.textContent = "فوز";
        preventPlaying.classList.add("show");

        setTimeout(reset, 3000);
      } else if (pcChoice == "rock") {
        console.log("user lost");
        result.textContent = "خسارة";
        preventPlaying.classList.add("show");

        setTimeout(reset, 3000);
      }
    } else if (userChoice == "paper") {
      if (pcChoice == "rock") {
        console.log("user win");
        preventPlaying.classList.add("show");

        result.textContent = "فوز";
        setTimeout(reset, 3000);
      } else if (pcChoice == "scissors") {
        console.log("user lost");
        result.textContent = "خسارة";
        preventPlaying.classList.add("show");

        setTimeout(reset, 3000);
      }
    }
  });
});
