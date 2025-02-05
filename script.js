const animals = {
  Data: [
    {
      Name: "Karhu",
      Info: "ruskea, karvainen, nukkuu talvet",
      Hints: ["Asuu metsässä", "tassuissa kynnet"],
    },
    {
      Name: "Tiikeri",
      Info: "raidallinen, vaarallinen, kehrää",
      Hints: ["Metsästää peuroja", "oranssimusta"],
    },
    {
      Name: "Hiiri",
      Info: "pieni, asuu pesässä, pitää juustosta",
      Hints: ["Vikisee", "pitkä häntä"],
    },
    {
      Name: "Lehmä",
      Info: "vahvaa, syö heinää, liikkuu laumassa",
      Hints: ["Ampuja", "Voidaan lypsätä"],
    },
    {
      Name: "Koira",
      Info: "toimii, oppii temppuja, pehmoista",
      Hints: ["Suosituin lemmikki", "kuori"],
    },
    {
      Name: "Papukaija",
      Info: "lentää, värikästä, elää tropiikissa",
      Hints: ["voi oppia puhumaan", "tykkää siemeniä"],
    },
    {
      Name: "Rotta",
      Info: "karvainen, pieni, musta rutto",
      Hints: ["karvaton häntä", "nopea"],
    },
    {
      Name: "Kissa",
      Info: "laiska, riehuu yöllä, hengittää kynsillä",
      Hints: ["voi purra sinua", "tykkää 'Whiskas'-ruoasta"],
    },
    {
      Name: "Orava",
      Info: "ruskea, pieni, pitää maapähkinöistä",
      Hints: ["nopea", "Nukkuu talvella"],
    },
    {
      Name: "Hai",
      Info: "ui vedessä, voi tappaa noin 7 ihmistä vuodessa",
      Hints: ["Uintia ei voi lopettaa", "Voi haistaa verta"],
    },
  ],
};

let Lifes = 3;
let CurrentScore = 0;
let MaxScore = 10;
let prefixQuestions = "Mikä eläin on kyseessä: ";
let prefixHints = "Vinkit: ";

const start = document.getElementById("start");
const startScreen = document.getElementById("startScreen");
const question = document.getElementById("question");
const hints = document.getElementById("hints");
const vastaus = document.getElementById("vastaus");
const Counter = document.getElementById("Counter");
const HealthCounter = document.getElementById("HealthCounter");

let AnimalName;

function StartGame() {
  startScreen.remove();
  Setup();
}

function RandomQuestion(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function CorrentAnswer() {
  alert("Correct");
  CurrentScore++;
  Setup();
}

function WrongAnswer() {
  alert("Wrong");
  Lifes -= 1;
  Setup();
}

function CheckHealth(value) {
  if (value == 3) {
    HealthCounter.style.color = "#8DFF71";
  } else if (value == 2) {
    HealthCounter.style.color = "#FFEE71";
  } else if (value == 1) {
    HealthCounter.style.color = "#FF6565";
  } else {
    HealthCounter.style.color = "#6C6C6C";
  }
}
function Setup() {
  CheckHealth(Lifes);
  Counter.innerHTML = `${CurrentScore}/10`;
  HealthCounter.innerHTML = `${Lifes}`;
  let Question = RandomQuestion(animals.Data);
  AnimalName = Question.Name;
  question.innerHTML = `${prefixQuestions} ${Question.Info}`;
  hints.innerHTML = `${prefixHints} ${Question.Hints[0]}, ${Question.Hints[1]}`;
}

function CheckAnswer() {
  console.log(vastaus.value);
  if (!vastaus || !isNaN(vastaus.value)) {
    console.log("Error");
    return;
  }

  if (vastaus.value == AnimalName) {
    CorrentAnswer();
  } else {
    WrongAnswer();
  }
}

function Test() {}
