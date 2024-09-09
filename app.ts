const radio5 = document.getElementById("five") as HTMLInputElement;
const radio10 = document.getElementById("ten") as HTMLInputElement;
const radio15 = document.getElementById("fifteen") as HTMLInputElement;
const radio20 = document.getElementById("twenty") as HTMLInputElement;
const yourScore = document.getElementById("you") as HTMLParagraphElement;
const compScore = document.getElementById("comp") as HTMLParagraphElement;
const scores = document.querySelector("h3") as HTMLHeadingElement;
const roundsContainer = document.querySelector(".rounds") as HTMLDivElement;
const rock = document.getElementById("rock") as HTMLDivElement;
const paper = document.getElementById("paper") as HTMLDivElement;
const scissors = document.getElementById("scissors") as HTMLDivElement;
const message = document.querySelector("h1") as HTMLHeadingElement;

let i = 0;
let you = 0;
let comp = 0;
const showRounds = document.createElement("p");
showRounds.setAttribute("class", "numberOFRounds");
roundsContainer.appendChild(showRounds);

function playGame() {
  clearRadioTags();
}

function chooseRock(event: Event) {
  const radioValue = checkChosenValue();
  event.preventDefault();
  if (i === 0) {
    playGame();
  } else if (i <= radioValue) {
    yourScore.textContent = "✊";
    showRounds.textContent = i + " / " + radioValue;
    whoWins(1);
  } else {
    if (you > comp) {
      message.textContent = "Yeaaah you Won";
    } else if (you < comp) {
      message.textContent = "Oh noo you're a looser";
    } else {
      message.textContent = "We're equal";
    }
  }
  i++;
}

function choosePaper(event: Event) {
  const radioValue = checkChosenValue();
  event.preventDefault();
  if (i === 0) {
    playGame();
  } else if (i <= radioValue) {
    yourScore.textContent = "✋";
    showRounds.textContent = i + " / " + radioValue;
    whoWins(2);
  }
  i++;
}

function chooseScissor(event: Event) {
  const radioValue = checkChosenValue();
  event.preventDefault();
  if (i === 0) {
    playGame();
  } else if (i <= radioValue) {
    yourScore.textContent = "✌️";
    showRounds.textContent = i + " / " + radioValue;
    whoWins(3);
  }
  i++;
}

rock.addEventListener("click", chooseRock);
paper.addEventListener("click", choosePaper);
scissors.addEventListener("click", chooseScissor);

function clearRadioTags() {
  const radioTags = document.querySelectorAll("input");
  radioTags.forEach((pTag) => pTag.remove());
  const labelTags = document.querySelectorAll("label");
  labelTags.forEach((pTag) => pTag.remove());
}

function whoWins(number: number) {
  const randomNumber = Math.ceil(Math.random() * 3);
  if (randomNumber == 1) {
    compScore.textContent = "✊";
  } else if (randomNumber == 2) {
    compScore.textContent = "✋";
  } else {
    compScore.textContent = "✌️";
  }
  if (randomNumber == number) {
    message.textContent = "It's a Draw";
  } else if (
    (number == 1 && randomNumber == 3) ||
    (number == 2 && randomNumber == 1) ||
    (number == 3 && randomNumber == 2)
  ) {
    if (number == 1 && randomNumber == 3) {
      message.textContent = "Rock beats Scissors";
    } else if (number == 2 && randomNumber == 1) {
      message.textContent = "Paper beats Rock";
    } else {
      message.textContent = "Scisccors beats Paper";
    }
    message.textContent += " You won";
    you++;
    scores.textContent = you + " : " + comp;
  } else {
    if (number == 3 && randomNumber == 1) {
      message.textContent = "Rock beats Scissors";
    } else if (number == 1 && randomNumber == 2) {
      message.textContent = "Paper beats Rock";
    } else {
      message.textContent = "Scisccors beats Paper";
    }
    message.textContent += " You lost";
    comp++;
    scores.textContent = you + " : " + comp;
  }
}

function checkChosenValue() {
  if (radio5.checked) {
    return 5;
  } else if (radio10.checked) {
    return 10;
  } else if (radio15.checked) {
    return 15;
  } else {
    return 20;
  }
}
