let startButton = document.querySelector(".start");
let img = document.querySelectorAll("img");
let pointsPlayer = document.querySelector("#points-player");
let generateCard;
let isPress = false;
let imagini = document.querySelector(".imagini");

let imagini2 = document.querySelector(".imagini2");
let show = document.querySelectorAll("#show");
let scorePlayer1 = 0;
let scoreComputer = 0;
let okButton = document.querySelector("#ok-button");
let stayButton = document.querySelector(".stay");
let pointsComputer = document.querySelector("#points-computer");
let infoText = document.querySelector("#info-text");
let firstCard;
let spanTextScore = document.querySelector("#span-score");
let score = localStorage.getItem("score");
spanTextScore.textContent = score;
// Retrieve
document
  .querySelector("#restart-button")
  .addEventListener("click", function () {
    localStorage.setItem("score", 0);
    console.log("da");
  });
stayButton.disabled = true;
function refreshPage() {
  window.location.reload();
}
/*var numbers = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
];
function shuffle(o) {
  for (
    var j, x, i = o.length;
    i;
    j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
  );
  return o;
}*/

//var random = shuffle(numbers);
//console.log(random);
var number = [
  "2C",
  "2D",
  "2H",
  "2S",
  "3C",
  "3D",
  "3H",
  "3S",
  "4C",
  "4D",
  "4H",
  "4S",
  "5C",
  "5D",
  "5H",
  "5S",
  "6C",
  "6D",
  "6H",
  "6S",
  "7C",
  "7D",
  "7H",
  "7S",
  "8C",
  "8D",
  "8H",
  "8S",
  "9C",
  "9D",
  "9H",
  "9S",
  "JC",
  "JD",
  "JH",
  "JS",
  "QC",
  "QD",
  "QH",
  "QS",
  "KC",
  "KD",
  "KH",
  "KS",
  "AC",
  "AD",
  "AH",
  "AS",
];
let c = imagini.children;
function start() {
  generateCard = Math.floor(Math.random() * 48);

  firstCard = generateCard;
  console.log(firstCard);
  document.getElementById("carti-inceput").style.display = "none";
  //prima carte dealer
  var x = document.createElement("img");
  x.setAttribute("src", `carti/red_back.png`);
  x.setAttribute("height", "auto");
  x.setAttribute("alt", "The Pulpit Rock");
  imagini.appendChild(x);

  show[0].style.display = "block";
  show[1].style.display = "block";
  setPointsComputer();

  generateCard = Math.floor(Math.random() * 48);
  //prima carte player
  var x = document.createElement("img");
  x.setAttribute("src", `carti/${number[generateCard]}.png`);
  x.setAttribute("height", "auto");
  x.setAttribute("alt", "The Pulpit Rock");
  imagini2.appendChild(x);
  setPoints();
  scorePlayer1 = parseInt(pointsPlayer.textContent);

  //a doua carte dealer
  generateCard = Math.floor(Math.random() * 48);
  var x = document.createElement("img");
  x.setAttribute("src", `carti/${number[generateCard]}.png`);
  x.setAttribute("height", "auto");
  x.setAttribute("alt", "The Pulpit Rock");
  imagini.appendChild(x);
  setPointsComputer();

  //a doua carte player
  generateCard = Math.floor(Math.random() * 48);
  var x = document.createElement("img");
  x.setAttribute("src", `carti/${number[generateCard]}.png`);
  x.setAttribute("height", "auto");
  x.setAttribute("alt", "The Pulpit Rock");
  imagini2.appendChild(x);
  setPoints();
  scorePlayer1 = parseInt(pointsPlayer.textContent);
  isPress = true;
  console.log("player" + scorePlayer1);
  console.log("computer" + scoreComputer);

  checkWinner2();
}

function computerThink(score) {
  if (score >= 16 && score < 21) {
    var decizie = Math.floor(Math.random() * 2);
    console.log("decizie:" + decizie);
    if (decizie === 0) {
      console.log("decizie:" + decizie);
    } else {
      //computer
      console.log("decizie:" + decizie);
      generateCard = Math.floor(Math.random() * 48);
      var x = document.createElement("img");
      x.setAttribute("src", `carti/${number[generateCard]}.png`);
      x.setAttribute("height", "auto");
      x.setAttribute("alt", "The Pulpit Rock");
      imagini.appendChild(x);
      setPointsComputer();
    }
  } else if (score == 21) {
  } else {
    //computer
    generateCard = Math.floor(Math.random() * 48);

    var x = document.createElement("img");
    x.setAttribute("src", `carti/${number[generateCard]}.png`);
    x.setAttribute("height", "auto");
    x.setAttribute("alt", "The Pulpit Rock");
    imagini.appendChild(x);
    setPointsComputer();
  }
}

okButton.addEventListener("click", function () {
  imagini.removeChild(c);
  imagini2.removeChild(c);
  pointsComputer.textContent = "?";
  pointsPlayer.textContent = "0";
  document.querySelector(".text-box").style.display = "none";
  document.querySelector(".container").style.filter = "blur(0px)";
});
stayButton.addEventListener("click", function () {
  document.querySelector(".text-box").style.display = "block";
  document.querySelector(".container").style.filter = "blur(2px)";
  checkWinner();
});
function checkWinner2() {
  if (scorePlayer1 > 21) {
    if (scoreComputer <= 21) {
      infoText.textContent = "Computer wins!";
      pointsComputer.textContent = scoreComputer;
      document.querySelector(".text-box").style.display = "block";
      document.querySelector(".container").style.filter = "blur(2px)";
      document.querySelector(".start").disabled = true;
      c[2].src = `carti/${number[firstCard]}.png`;
    }
  }

  if (scoreComputer > 21) {
    if (scorePlayer1 <= 21) {
      infoText.textContent = "Player wins!";
      pointsComputer.textContent = scoreComputer;
      document.querySelector(".text-box").style.display = "block";
      document.querySelector(".container").style.filter = "blur(2px)";
      document.querySelector(".start").disabled = true;
      c[2].src = `carti/${number[firstCard]}.png`;
      score++;
      localStorage.setItem("score", parseInt(score));
      spanTextScore.textContent = score;
    }
  }
  if (scoreComputer > 21) {
    if (scorePlayer1 > 21) {
      infoText.textContent = "No one wins!";
      pointsComputer.textContent = scoreComputer;
      document.querySelector(".text-box").style.display = "block";
      document.querySelector(".container").style.filter = "blur(2px)";
      document.querySelector(".start").disabled = true;
      c[2].src = `carti/${number[firstCard]}.png`;
    }
  }
}
//button[0].addEventListener("click", function () {
//document.querySelector(".text-box").style.display = "none";
//document.querySelector(".container").style.filter = "blur(0px)";
//});

function setPoints() {
  if (number[generateCard].charAt(0) == "J") {
    pointsPlayer.textContent = parseInt(pointsPlayer.textContent) + 10;
    console.log(pointsPlayer.textContent);
  } else if (number[generateCard].charAt(0) == "Q") {
    pointsPlayer.textContent = parseInt(pointsPlayer.textContent) + 11;
  } else if (number[generateCard].charAt(0) == "K") {
    pointsPlayer.textContent = parseInt(pointsPlayer.textContent) + 12;
  } else if (number[generateCard].charAt(0) == "A") {
    pointsPlayer.textContent = parseInt(pointsPlayer.textContent) + 1;
  } else {
    pointsPlayer.textContent =
      parseInt(pointsPlayer.textContent) +
      parseInt(number[generateCard].charAt(0));
  }
}

function setPointsComputer() {
  if (number[generateCard].charAt(0) == "J") {
    scoreComputer += 10;
  } else if (number[generateCard].charAt(0) == "Q") {
    scoreComputer += 11;
  } else if (number[generateCard].charAt(0) == "K") {
    scoreComputer += 12;
  } else if (number[generateCard].charAt(0) == "A") {
    scoreComputer += 1;
  } else {
    scoreComputer += parseInt(number[generateCard].charAt(0));
  }
}
startButton.addEventListener("click", function () {
  if (!isPress) {
    start();
    stayButton.disabled = false;
  } else {
    stayButton.disabled = false;
    //computer
    computerThink(parseInt(scoreComputer));
    //player
    generateCard = Math.floor(Math.random() * 48);
    var x = document.createElement("img");
    x.setAttribute("src", `carti/${number[generateCard]}.png`);
    x.setAttribute("height", "auto");
    x.setAttribute("alt", "The Pulpit Rock");
    imagini2.appendChild(x);
    isPress = true;
    setPoints();
    scorePlayer1 = parseInt(pointsPlayer.textContent);
    console.log("player" + scorePlayer1);
    console.log("computer" + scoreComputer);
    checkWinner2();

    stayButton.addEventListener("click", function () {
      checkWinner();
    });
    c = imagini.children;
    console.log(c.length);
  }
});

function checkWinner() {
  if (scoreComputer === scorePlayer1) {
    infoText.textContent = "Tie!";
    pointsComputer.textContent = scoreComputer;
    document.querySelector(".text-box").style.display = "block";
    document.querySelector(".container").style.filter = "blur(2px)";
    document.querySelector(".start").disabled = true;
    c[2].src = `carti/${number[firstCard]}.png`;
  }
  if (scorePlayer1 > scoreComputer) {
    if (scorePlayer1 <= 21) {
      infoText.textContent = "Player wins!";
      pointsComputer.textContent = scoreComputer;
      document.querySelector(".text-box").style.display = "block";
      document.querySelector(".container").style.filter = "blur(2px)";
      document.querySelector(".start").disabled = true;
      c[2].src = `carti/${number[firstCard]}.png`;
      score++;
      localStorage.setItem("score", parseInt(score));
      spanTextScore.textContent = localStorage.getItem("score");
    }
  }
  if (scoreComputer > scorePlayer1) {
    if (scoreComputer <= 21) {
      infoText.textContent = "Computer wins!";
      pointsComputer.textContent = scoreComputer;
      document.querySelector(".text-box").style.display = "block";
      document.querySelector(".container").style.filter = "blur(2px)";
      document.querySelector(".start").disabled = true;
      c[2].src = `carti/${number[firstCard]}.png`;
    }
  }
}
