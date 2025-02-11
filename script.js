const animals = {
  Data: [
    {
      Name: "Karhu",
      Info: "Suuri ja karvainen eläin, joka nukkuu talvella.",
      Hints: [
        "Asuu metsässä",
        "Syö marjoja ja kalaa",
        "Hyvin suuri ja voimakas",
      ],
    },
    {
      Name: "Tiikeri",
      Info: "Vaarallinen kissapeto, joka tunnetaan oransseista ja mustista raidoistaan.",
      Hints: [
        "Metsästää suuria saaliita",
        "Oranssinmustat raidat",
        "On hyvä uimari",
      ],
    },
    {
      Name: "Hiiri",
      Info: "Pieni, nopea ja älykäs jyrsijä, joka elää pesässä ja rakastaa syödä juustoa.",
      Hints: [
        "Vikisee ja piiloutuu helposti",
        "Pitkä häntä",
        "Hyvin älykäs ja utelias",
      ],
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
        "Oppii hyvin käskyjä",
        "Rakastaa ulkoilua ja leikkejä",
      ],
    },
    {
      Name: "Papukaija",
      Info: "Värikäs lintu, joka elää tropiikissa ja voi oppia toistamaan sanoja.",
      Hints: [
        "Voi oppia puhumaan",
        "Rakastaa siemeniä",
        "Elää tropiikissa ja metsissä",
      ],
    },
    {
      Name: "Rotta",
      Info: "Pieni ja nopea jyrsijä, joka tunnetaan hyvin sopeutuvasta luonteestaan ja karvattomasta hännästään.",
      Hints: [
        "Nopea ja älykäs",
        "Elää monenlaisissa ympäristöissä",
        "Karvaton häntä",
      ],
    },
    {
      Name: "Kissa",
      Info: "Itsenäinen ja arvoituksellinen lemmikki, joka nauttii omasta tilastaan mutta on myös rakastettu seuraeläin.",
      Hints: [
        "On taitava saalistaja",
        "Tykkää erityisesti liharuokista",
        "Möykkää yöllä ja pitää itsenäisyyttään",
      ],
    },
    {
      Name: "Orava",
      Info: "Pieni, nopea ja ketterä eläin, joka elää metsissä ja talvehtii nukkumalla.",
      Hints: [
        "Rakastaa pähkinöitä",
        "Hyvin nopea ja ketterä",
        "Kerää talveksi ruokaa",
      ],
    },
    {
      Name: "Hai",
      Info: "Suurikokoinen peto, joka elää merissä. On tunnettu kyvystään haistaa verta ja liikkua nopeasti vedessä.",
      Hints: [
        "Uiminen on sen elinehto",
        "Haistaa veren erittäin pitkältä",
        "Syö muita merieläimiä",
      ],
    },
    {
      Name: "Leopardi",
      Info: "Kaunis, ketterä ja vahva kisapeto, joka tunnetaan erityisesti sen täplikkäistä turkeistaan.",
      Hints: [
        "Tähtää saaliinsa päähän",
        "Erinomainen kiipeilijä",
        "Täplikkäät turkit",
      ],
    },
    {
      Name: "Elefantti",
      Info: "Maailman suurin maaeläin, tunnettu valtavasta koosta, pitkistä sarvista ja älykkyydestään.",
      Hints: [
        "Tornimaiset korvat",
        "Pitkä kärsä",
        "Rauhallinen mutta erittäin voimakas",
      ],
    },
    {
      Name: "Pingviini",
      Info: "Lentokyvytön lintu, joka elää Etelämantereella. Erinomainen uimari, joka sukeltaa syvälle etsiessään ruokaa.",
      Hints: [
        "Elää kylmässä ympäristössä",
        "Erinomainen uimari",
        "Ei pysty lentämään",
      ],
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
        "Mustavalkoiset raidat",
        "Elää Afrikan savanneilla",
        "Sosiaaliset eläimet",
      ],
    },
    {
      Name: "Lintu",
      Info: "Siivekäs eläin, joka pystyy lentämään ja pesii usein puissa.",
      Hints: [
        "Pystyy lentämään",
        "Useimmat linnut munivat",
        "Suojaa siivet ja pesii korkealla",
      ],
    },
    {
      Name: "Kenguru",
      Info: "Suuri ja voimakas marsupiaali, joka elää Australiassa ja hyppii pitkää matkaa.",
      Hints: [
        "Hyppää pitkälle",
        "Elää Australiassa",
        "Erittäin voimakkaat takajalat",
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
      Hints: [
        "Hyvin älykäs",
        "Asuu meressä",
        "Rakastaa leikkiä ja hyppimistä vedessä",
      ],
    },
    {
      Name: "Susi",
      Info: "Villieläin, joka elää laumoissa ja on tunnettu ääntelystään sekä metsästyksestään.",
      Hints: [
        "Elää laumoissa",
        "On älykäs ja hyvä metsästäjä",
        "Pystyy ulvomaan pitkälle",
      ],
    },
    {
      Name: "Krokotiili",
      Info: "Vaarallinen matelija, joka elää makeassa vedessä ja on tunnettu nopeistaan hyökkäyksistään.",
      Hints: [
        "Elää vesistöissä",
        "Pystyy liikkumaan nopeasti vedessä",
        "Hyvin vahvat leuat",
      ],
    },
    {
      Name: "Muurahainen",
      Info: "Pieni ja ahkera hyönteinen, joka elää suurissa yhteiskunnissa ja on tunnettu työstään.",
      Hints: [
        "Elää suurissa kolonisissa ryhmissä",
        "Työskentelee ahkerasti ruokavarastojen keräämiseksi",
        "On erittäin vahva suhteessa kokoon",
      ],
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

const click = new Audio("mouse.mp3");

const start = document.getElementById("start");
const startScreen = document.getElementById("startScreen");
const question = document.getElementById("question");
const hints = document.getElementById("hints");
const vastaus = document.getElementById("vastaus");
const Counter = document.getElementById("Counter");
const HealthCounter = document.getElementById("HealthCounter");
const checkValueAnswer = document.getElementById("checkValueAnswer");
const TheEnd = document.getElementById("TheEnd");

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
  checkValueAnswer.innerHTML = `<div class="wrong">
    <div class="inwrong">WRONG</div>
  </div>`;

  if (Lifes < 0) {
    LooseScreen();
  }

  if (HintsValue == 1) {
    hints.innerHTML = `${prefixHints}<span style="color:rgb(255, 222, 187);"> ${Hint1}</span>`;
  } else if (HintsValue == 2) {
    hints.innerHTML = `${prefixHints}<span style="color: rgb(255, 222, 187);"> ${Hint1}, ${Hint2}</span>`;
  } else if (HintsValue == 3) {
    hints.innerHTML = `${prefixHints}<span style="color: rgb(255, 222, 187);"> ${Hint1}, ${Hint2}, ${Hint3}</span>`;
  } else {
    hints.innerHTML = `${prefixHints}<span style="color: rgb(255, 222, 187);"> - - -</span>`;
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
  HealthCounter.classList.remove("healthloss1", "healthloss2", "healthloss3");

  if (value == 3) {
    HealthCounter.classList.add("healthloss1");
  } else if (value == 2) {
    HealthCounter.classList.add("healthloss1");
  } else if (value == 1) {
    HealthCounter.classList.add("healthloss2");
  } else if (value == 0) {
    HealthCounter.classList.add("healthloss3");
  }
}

function WinningScreen() {
  TheEnd.innerHTML = `<div class="TheEnd win">
        Good job! You won!
      </div>`;
}

function LooseScreen() {
  TheEnd.innerHTML = `<div class="TheEnd loose">
        Man you suck lol
      </div>`;
}

function Setup() {
  Counter.innerHTML = `${CurrentScore}/10`;
  HealthCounter.innerHTML = `Lifes: ${Lifes}`;
  if (HintsValue > 0) {
    return;
  }
  let Question = RandomQuestion(animals.Data);
  AnimalName = Question.Name;
  Hint1 = Question.Hints[0];
  Hint2 = Question.Hints[1];
  Hint3 = Question.Hints[2];
  question.innerHTML = `${prefixQuestions} <span style="color: #FFFFBB;">${Question.Info}</span>`;
}

function CheckAnswer() {
  click.play();
  if (!vastaus || !isNaN(vastaus.value)) {
    alert("!Error! (You cant leave the message blank or put numbers!)");
    return;
  } else if (CurrentScore > 9) {
    sleep(1000).then(() => {
      WinningScreen();
    });
    return;
  }

  if (vastaus.value.toLowerCase() == AnimalName.toLowerCase()) {
    CorrentAnswer();
    vastaus.value = "";
  } else {
    WrongAnswer();
    vastaus.value = "";
  }
}
