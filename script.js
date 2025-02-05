const animals = {
  Data: [
    {
      Name: "Karhu",
      Info: "Suuri ja karvainen eläin, joka nukkuu talvella.",
      Hints: [
        "Asuu metsässä",
        "Pitää marjoista ja kalasta",
        "Voimakas ja suuri",
      ],
    },
    {
      Name: "Tiikeri",
      Info: "Vaarallinen kissapeto, joka tunnetaan oransseista ja mustista raidoistaan.",
      Hints: ["Metsästää peuroja", "Oranssinmustat raidat", "On hyvä uimari"],
    },
    {
      Name: "Hiiri",
      Info: "Pieni, nopea ja älykäs jyrsijä, joka elää pesässä ja rakastaa syödä juustoa.",
      Hints: ["Vikisee", "Pitkä häntä", "Hyvin älykäs ja utelias"],
    },
    {
      Name: "Lehmä",
      Info: "Suuri ja rauhallinen eläin, joka elää laumoissa.",
      Hints: ["Tuottaa maitoa", "Tärkeä osa maataloutta", "Syö ruohoa"],
    },
    {
      Name: "Koira",
      Info: "Uskollinen lemmikki, joka on tunnettu älykkyydestään.",
      Hints: [
        "Suosituin lemmikki",
        "Pystyy oppimaan käskyjä",
        "Rakastaa lenkkeilyä",
      ],
    },
    {
      Name: "Papukaija",
      Info: "Värikäs lintu, joka elää tropiikissa ja voi oppia toistamaan sanoja.",
      Hints: [
        "Voi oppia puhumaan",
        "Rakastaa siemeniä",
        "Elää trooppisissa metsissä",
      ],
    },
    {
      Name: "Rotta",
      Info: "Pieni ja nopea jyrsijä, joka tunnetaan hyvin sopeutuvasta luonteestaan ja karvattomasta hännästään.",
      Hints: [
        "Nopea ja älykäs",
        "Voi elää lähes kaikissa ympäristöissä",
        "Karvaton häntä",
      ],
    },
    {
      Name: "Kissa",
      Info: "Itsenäinen ja arvoituksellinen lemmikki, joka nauttii omasta tilastaan mutta on myös rakastettu seuraeläin.",
      Hints: [
        "On erittäin hyvä saalistaja",
        "Tykkää 'Whiskas'-ruoasta",
        "Möykkää yöllä",
      ],
    },
    {
      Name: "Orava",
      Info: "Pieni, nopea ja ketterä eläin, joka elää metsissä ja talvehtii nukkumalla.",
      Hints: [
        "Rakastaa pähkinöitä",
        "Nopea ja ketterä",
        "Kerää talveksi ruokaa",
      ],
    },
    {
      Name: "Hai",
      Info: "Suurikokoinen peto, joka elää merissä. On tunnettu kyvystään haistaa verta ja liikkua nopeasti vedessä.",
      Hints: [
        "Uiminen on sen elinehto",
        "Voi haistaa veren kilometrien päästä",
        "Syö muita merieläimiä",
      ],
    },
    {
      Name: "Leopardi",
      Info: "Kaunis, ketterä ja vahva kisapeto, joka tunnetaan erityisesti sen täplikkäistä turkeistaan.",
      Hints: ["Tähtää saaliinsa päähän", "Hyvin kiipeävä", "Täplikkäät turkit"],
    },
    {
      Name: "Elefantti",
      Info: "Maailman suurin maaeläin, tunnettu valtavasta koosta, pitkistä sarvista ja älykkyydestään.",
      Hints: [
        "Tornimaiset korvat",
        "Pitkä kärsä",
        "Rauhallinen mutta voimakas",
      ],
    },
    {
      Name: "Pingviini",
      Info: "Lentokyvytön lintu, joka elää Etelämantereella. Erinomainen uimari, joka sukeltaa syvälle etsiessään ruokaa.",
      Hints: ["Elää kylmässä", "Pystyy uimaan pitkälle", "Ei pysty lentämään"],
    },
    {
      Name: "Panda",
      Info: "Rakastettu karvainen eläin, joka elää Kiinan vuoristossa ja syö pääasiassa bambua.",
      Hints: ["Rakastaa bambua", "Pehmeä turkki", "Yksinäinen elintapa"],
    },
    {
      Name: "Valkohai",
      Info: "Suuri petohai, joka tunnetaan voimakkaista leuoistaan ja nopeasta uimisesta.",
      Hints: [
        "Tappaa harvoin mutta tehokkaasti",
        "Voi kasvaa jopa 6 metriä pitkäksi",
        "Elää lämpimissä merissä",
      ],
    },
    {
      Name: "Zebra",
      Info: "Hevoseläin, joka tunnetaan mustavalkoisista raidoistaan ja elää suurissa laumoissa Afrikassa.",
      Hints: [
        "Raidat, jotka tekevät siitä erottuvan",
        "Asuu savanneilla",
        "Sosiaaliset eläimet",
      ],
    },
    {
      Name: "Lintu",
      Info: "Siivekäs eläin, joka pystyy lentämään ja pesii usein puissa.",
      Hints: [
        "Pystyy lentämään",
        "Lähes kaikki linnut munivat",
        "Suojaa siivet",
      ],
    },
    {
      Name: "Kenguru",
      Info: "Suuri ja voimakas marsupiaali, joka elää Australiassa ja hyppii pitkää matkaa.",
      Hints: [
        "Hyppää pitkälle",
        "Elää Australiassa",
        "Hyvin voimakkaat takajalat",
      ],
    },
    {
      Name: "Kirahvi",
      Info: "Erittäin pitkä eläin, joka elää Afrikan savanneilla ja tunnetaan erityisesti pitkästä kaulastaan.",
      Hints: [
        "Maailman korkein maaeläin",
        "Pitkä kaula",
        "Syö korkeimpia puun oksia",
      ],
    },
    {
      Name: "Delfiini",
      Info: "Älykkäitä ja leikkisiä mereneläväisiä, jotka tunnetaan ystävällisyydestään ja akrobaattisista taidoistaan.",
      Hints: ["Hyvin älykäs", "Asuu meressä", "Rakastaa leikkiä"],
    },
  ],
};

let Lifes = 3;
let HintsValue = 0;
let Hint1;
let Hint2;
let Hint3;
let CurrentScore = 0;
let MaxScore = 10;
let prefixQuestions = "Mikä eläin on kyseessä: ";
let prefixHints = "Vinkkit: ";

const start = document.getElementById("start");
const startScreen = document.getElementById("startScreen");
const question = document.getElementById("question");
const hints = document.getElementById("hints");
const vastaus = document.getElementById("vastaus");
const Counter = document.getElementById("Counter");
const HealthCounter = document.getElementById("HealthCounter");
const checkValueAnswer = document.getElementById("checkValueAnswer");

let AnimalName;

function StartGame() {
  startScreen.remove();
  Setup();
}

function RandomQuestion(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function CorrentAnswer() {
  HintsValue = 0;
  hints.innerHTML = `${prefixHints} - - -`;
  checkValueAnswer.innerHTML = `<div class="correct">
    <div class="insidecorrect">CORRECT</div>
  </div>`;
  CurrentScore++;
  sleep(2000).then(() => {
    checkValueAnswer.innerHTML = ``;
  });
  Setup();
}

function WrongAnswer() {
  HintsValue++;
  Lifes -= 1;
  if (Lifes < 1) {
    checkValueAnswer.innerHTML = `<div class="wrong">
    <div class="inwrong">WRONG (Correct answer: ${AnimalName})</div>
  </div>`;
  } else {
    checkValueAnswer.innerHTML = `<div class="wrong">
    <div class="inwrong">WRONG</div>
  </div>`;
  }

  if (HintsValue == 1) {
    hints.innerHTML = `${prefixHints} ${Hint1}`;
  } else if (HintsValue == 2) {
    hints.innerHTML = `${prefixHints} ${Hint1}, ${Hint2}`;
  } else if (HintsValue == 3) {
    hints.innerHTML = `${prefixHints} ${Hint1}, ${Hint2}, ${Hint3}`;
  } else {
    hints.innerHTML = `${prefixHints} - - -`;
  }
  sleep(2000).then(() => {
    checkValueAnswer.innerHTML = ``;
  });
  CheckHealth(Lifes);
  Setup();
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function CheckHealth(value) {
  if (value == 3) {
    HealthCounter.style.color = "#8DFF71";
  } else if (value == 2) {
    HealthCounter.style.color = "#FFEE71";
  } else if (value == 1) {
    HealthCounter.style.color = "#FF6565";
  } else if (value == 0) {
    HealthCounter.style.color = "#6C6C6C";
  }
}

function Setup() {
  Counter.innerHTML = `${CurrentScore}/10`;
  HealthCounter.innerHTML = `${Lifes}`;
  if (HintsValue > 0) {
    return;
  }
  let Question = RandomQuestion(animals.Data);
  AnimalName = Question.Name;
  Hint1 = Question.Hints[0];
  Hint2 = Question.Hints[1];
  Hint3 = Question.Hints[2];
  question.innerHTML = `${prefixQuestions} ${Question.Info}`;
}

function CheckAnswer() {
  if (!vastaus || !isNaN(vastaus.value)) {
    alert("!Error! (You cant leave the message blank or put numbers!)");
    return;
  } else if (Lifes < 1) {
    alert("You lost(");
    return;
  } else if (CurrentScore >= 10) {
    alert("You win!");
    return;
  }
  if (vastaus.value.toLowerCase() == AnimalName.toLowerCase()) {
    CorrentAnswer();
  } else {
    WrongAnswer();
  }
}
