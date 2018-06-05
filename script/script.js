// Tantangan: bagaimana cara mengubah kode Anda sehingga game Anda easily extensible ke rps-101? http://retrohelix.com/en/wp-content/uploads/2013/08/rps-101.jpg
function computerPlay(rockCounter, paperCounter, scissorsCounter) {
  let a = rockCounter;
  let b = paperCounter;
  let c = scissorsCounter;
  // Spacing. Dan selalu gunakan triple equals ===
  if (a+b+c == 0) {
    return "paper";
  }
  let tot = a + b +c;
  a /= tot;
  b /= tot;
  c /= tot;
  let ans = Math.random();
  if (ans < a) {
    return "paper";
  } else if (ans < (a+b)) {
    return "scissors";
  } else {
    return "rock";
  }
}

function playRound(player, computer) {
  if (player == computer) {
    return "Draw!";
  } else if ((player == "rock" && computer == "scissors") || (player == "scissors" && computer == "paper") || (player == "paper" && computer == "rock")) {
    return "You Win!";
  } else {
    return "You Lose!";
  }
}


let a = 0;
let b = 0;
let c = 0;
let hum = 0;
let cpu = 0;
let draw = 0;

function start(rockCounter, paperCounter, scissorsCounter) {
  a = rockCounter;
  b = paperCounter;
  c = scissorsCounter;
  hum = 0;
  cpu = 0;
  draw = 0;
  alert("Let the Torture Begin!");
  return;
}


function clicks(choose) {
  // Please use better variable names, CP jangan dibawa ke sini
  let com = computerPlay(a, b, c);
  let res = playRound(choose, com);
  let msg = document.getElementById("result");
  if (choose == "rock") {
    a++;
  } else if (choose == "paper") {
    b++;
  } else {
    c++;
  }
  if(res == "You Win!") {
    hum++
  } else if (res == "You Lose!") {
    cpu++;
  } else {
    draw++;
  }
  result.innerHTML = res;
  document.getElementById("myscore").innerHTML = hum;
  document.getElementById("oppscore").innerHTML = cpu;
  document.getElementById("drawscore").innerHTML = draw;
  if (hum == 11) {
    alert("You won my AI! Congrats!");
  } else if (cpu == 11) {
    alert("Wah so weak!");
  }
  if (hum == 11 || cpu == 11) {
    alert("The game will be restarted using a better AI.");
    start(a, b, c);
  }
  return;
}



// document.onload harusnya sebuah _function_. Jadi yang benar adalah
// document.onload = function() { start(0, 0, 0); };
document.onload = start(0, 0, 0);


// Gunakan for loop
let rck = document.getElementById("rock");
rck.addEventListener('click', function() {clicks("rock")});

let ppr = document.getElementById("paper");
let sci = document.getElementById("scissors");

ppr.addEventListener('click', function() {clicks("paper")});
sci.addEventListener("click", function() {clicks("scissors")});
