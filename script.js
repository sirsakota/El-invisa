const animals = {
  Data: [
    {
      Name: "Karhu",
      Info: "Suuri ja karvainen eläin, joka nukkuu talvella.",
      Hints: [
        "Asuu metsässä",
        "Syö marjoja ja kalaa",
        "Toiselta nimeltään otso",
      ],
    },
    {
      Name: "Tiikeri",
      Info: "Vaarallinen kissapeto, joka tunnetaan oransseista ja mustista raidoistaan.",
      Hints: ["Metsästää suuria saaliita", "Karjuu hurjasti", "On hyvä uimari"],
    },
    {
      Name: "Hiiri",
      Info: "Pieni, nopea ja älykäs jyrsijä, joka elää pesässä ja rakastaa syödä juustoa.",
      Hints: [
        "Vikisee ja piiloutuu helposti",
        "Pitkä häntä",
        "Tunnettu esimerkki mediassa on Jerry",
      ],
    },
    {
      Name: "Lehmä",
      Info: "Suuri ja ammuva eläin, joka elää laumoissa.",
      Hints: ["Tuottaa maitoa", "Tärkeä osa maataloutta", "Syö ruohoa"],
    },
    {
      Name: "Koira",
      Info: "Uskollinen nelijalkainen lemmikki, joka on tunnettu älykkyydestään.",
      Hints: [
        "Suosituin lemmikki",
        "Monia rotuja, jotka ihmiset ovat kehittäneet",
        "Useimmat rodut ovat jalostettu tiettyyn työhön, esim. metsästykseen",
      ],
    },
    {
      Name: "Papukaija",
      Info: "Värikäs lintu, joka elää tropiikissa ja voi oppia toistamaan sanoja.",
      Hints: [
        "Usein löytyy merirosvo-teemoista",
        "Rakastaa siemeniä",
        "Paljon eri vokalisaatioita, kuten laulaminen ja raakkuminen",
      ],
    },
    {
      Name: "Rotta",
      Info: "Pieni ja nopea jyrsijä, joka tunnetaan hyvin sopeutuvasta luonteestaan ja karvattomasta hännästään.",
      Hints: [
        "On opetettu pelaamaan koripalloa",
        "Luullaan likaiseksi, mutta on oikeasti hyvin siisti eläin",
        "Päätöhtenä suositussa elokuvassa Ratatouille",
      ],
    },
    {
      Name: "Kissa",
      Info: "Itsenäinen pieni metsästäjä, joka nauttii omasta tilastaan mutta on myös rakastettu seuraeläin.",
      Hints: [
        "On taitava saalistaja",
        "Tykkää erityisesti liharuokista",
        "Päätähtenä piirrossarjassa Tom & Jerry",
      ],
    },
    {
      Name: "Orava",
      Info: "Pieni, nopea ja ketterä eläin, joka kiipeilee puissa ja pitää pähkinöistö.",
      Hints: ["Nukkuu talvet", "Pörröinen karvahäntä", "Kerää talveksi ruokaa"],
    },
    {
      Name: "Hai",
      Info: "Suurikokoinen petokala, joka elää merissä. On tunnettu kyvystään haistaa verta ja liikkua nopeasti vedessä.",
      Hints: [
        "Ei voi lopettaa uimista koskaan",
        "Monta rivia teräviä hampaita",
        "Päävihollisena elokuvassa Jaws",
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
      Info: "Rakastettu mustavalkoinen eläin, joka elää Kiinan vuoristossa ja syö pääasiassa bambua.",
      Hints: [
        "Melkein kuoli sukupuuttoon",
        "Pehmeä turkki",
        "Esiintyy logossa WWF-järjestölle (World Wildlife Fund)",
      ],
    },
    {
      /* Name: "Valkohai",
      Info: "Suuri petohai, joka tunnetaan voimakkaista leuoistaan ja nopeasta uimisesta.",
      Hints: [
        "Tappaa harvoin mutta tehokkaasti",
        "Voi kasvaa jopa 6 metriä pitkäksi",
        "Elää lämpimissä merissä",
      ],*/
    },
    {
      Name: "Zebra",
      Info: "Hevoseläin, joka tunnetaan mustavalkoisista raidoistaan ja elää suurissa laumoissa Afrikassa.",
      Hints: [
        "Kimeä ääni",
        "Leijonien suurta herkkua",
        "Pystyy juoksemaan jopa 64km/h",
      ],
    },
    {
      /*Name: "Lintu",
      Info: "Siivekäs eläin, joka pystyy lentämään ja pesii usein puissa.",
      Hints: [
        "Pystyy lentämään",
        "Useimmat linnut munivat",
        "Suojaa siivet ja pesii korkealla",
      ],*/
    },
    {
      Name: "Kenguru",
      Info: "Suuri ja voimakas marsupiaali, joka elää Australiassa ja hyppii pitkää matkaa.",
      Hints: [
        "Eläimen vauvat kasvavat erikoisessa mahapussukassa",
        "Isoa laumaanäitä kutsutaan Mobiksi",
        "Erittäin voimakkaat takajalat",
      ],
    },
    {
      Name: "Kirahvi",
      Info: "Erittäin korkea eläin, joka elää Afrikan savanneilla ja tunnetaan erityisesti pitkästä kaulastaan.",
      Hints: [
        "Maailman korkein maaeläin",
        "Oranssi-ruskea täpläkuvio",
        "Pitkät jalat joilla se voi potkia kovaa",
      ],
    },
    {
      Name: "Delfiini",
      Info: "Älykkäitä ja leikkisiä mereneläväisiä, jotka tunnetaan ystävällisyydestään ja akrobaattisista taidoistaan.",
      Hints: ["Valaan sukua", "Laumaeläin", "Päähahmona elokuvassa Flipper"],
    },
    {
      Name: "Susi",
      Info: "Petoeläin, joka elää laumoissa ja on tunnettu ulvomisestaan.",
      Hints: [
        "Älykäs metsästystapa jota lauma tekee yhdessä",
        "Supsitun lemmikin esi-isä",
        "Voi myös haukkua",
      ],
    },
    {
      Name: "Krokotiili",
      Info: "Vaarallinen matelija, joka elää vedessä ja on suuri.",
      Hints: [
        "Kutsutään eläviksi fossiileiksi",
        "Suurimmat voivat kasvaa jopa 6metriä pitkäksi",
        "Hyvin vahvat leuat jotka purevat kiinni kun eläin pyörittää saalistaan",
      ],
    },
    {
      Name: "Muurahainen",
      Info: "Pieni ja ahkera hyönteinen, joka elää suurissa yhteiskunnissa.",
      Hints: [
        "Tunnettu ahkerasta yhteisestä työnteosta",
        "Kuusijalkainen hyönteinen",
        "Näillä hyönteisillä ei ole korvia",
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
