// Table of all current animals with data inside (Name, Info and Hints)
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
      Info: "Pieni, nopea ja ketterä eläin, joka kiipeilee puissa ja pitää pähkinöistä.",
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
        "Pitkä häntä joka auttaa tasapainottelussa",
        "Erinomainen kiipeilijä joka kantaa saaliinsa puuhun",
        "Usein vaaleanruskea musta-valkoisilla täplillä",
      ],
    },
    {
      Name: "Elefantti",
      Info: "Maailman suurin maaeläin, tunnettu pitkistä sarvista ja älykkyydestään.",
      Hints: [
        "Tornimaiset korvat joillaeläin voi säätää lämpötilaansa",
        "Pitkä kärsä",
        "Erittäin pitkä muisti",
      ],
    },
    {
      Name: "Pingviini",
      Info: "Lentokyvytön lintu, joka elää Etelämantereella.",
      Hints: [
        "Sukeltaa saalistamaan kalaa",
        "Useimmat lajit ovat väriltään mustavalkoisia, kuin olisivat pukeutuneet smokkiin",
        "Urokset lahjovat naaraita kauniilla kivillä pariutuakseen",
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

// Data Variables that will be used and changed in script
let Lifes = 3;
let HintsValue = 0;
let Hint1;
let Hint2;
let Hint3;
let CurrentScore = 0;
let MaxScore = 10;
let prefixQuestions = "Mikä eläin on kyseessä: ";
let prefixHints = "Vinkkit: ";

// Sound Effects
const click = new Audio("mouse.mp3");
const music = new Audio("Hollow Knight OST - Crossroads.mp3");

// All variables that are used to display or change data
const start = document.getElementById("start");
const startScreen = document.getElementById("startScreen");
const question = document.getElementById("question");
const hints = document.getElementById("hints");
const vastaus = document.getElementById("vastaus");
const Counter = document.getElementById("Counter");
const HealthCounter = document.getElementById("HealthCounter");
const checkValueAnswer = document.getElementById("checkValueAnswer");
const TheEnd = document.getElementById("TheEnd");

// A variable to store and transfer data from one script to another
let AnimalName;

// This is the main menu script that will start the game
function StartGame() {
  music.loop = true; // Make the music Loop forever
  music.play(); // Play music
  startScreen.remove(); // Remove start frame
  Setup(); // Start the game
}

// This script is made to pick random question and return it to display it on the main screen
function RandomQuestion(items) {
  return items[Math.floor(Math.random() * items.length)];
}

// This script is made to check if the answer is correct after that it will perform next things below
function CorrentAnswer() {
  HintsValue = 0; // Reset the Hints value
  hints.innerHTML = `${prefixHints} - - -`; // Change the prefix back
  checkValueAnswer.innerHTML = `<div class="correct">
    <div class="insidecorrect">CORRECT</div>
  </div>`; // Display Correct
  CurrentScore++; // Add +1 if the answer is correct
  sleep(2000).then(() => {
    checkValueAnswer.innerHTML = ``;
  }); // wait 2 seconds before deleting ValueAnswer
  Setup(); // Restart the game
}

// This script is made to check if the answer is Wrong after that it will perform next things below
function WrongAnswer() {
  HintsValue++; // Add +1 to Hints
  Lifes -= 1; // Decrease 1 life
  checkValueAnswer.innerHTML = `<div class="wrong">
    <div class="inwrong">WRONG</div>
  </div>`; // Display Wrong

  // Will check if the amount of lifes is less than 0 it will display end screen
  if (Lifes < 0) {
    LooseScreen();
  }

  // Basic function to display more hints per 1 Hint value
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
  }); // wait 2 seconds before deleting ValueAnswer
  CheckHealth(Lifes); // This script basically will update the health amount after its decrease
  Setup(); // Restart the Game
}

// A simple function for time counter
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// This script will do health animation based on the health amount
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

// Display winning screen
function WinningScreen() {
  TheEnd.innerHTML = `<div class="TheEnd win">
        Good job! You won!
      </div>`;
}

// Display lost screen
function LooseScreen() {
  TheEnd.innerHTML = `<div class="TheEnd loose">
        Man you suck lol
      </div>`;
}

// Setup function (In my opinion the main core), is used to restart the game and display new question
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

// Check for the answer if its correct or not
function CheckAnswer() {
  click.play(); // Play click sound when you submit

  //Check if the value is not empty and its not a number
  if (!vastaus || !isNaN(vastaus.value)) {
    alert("!Error! (You cant leave the message blank or put numbers!)");
    return;
  } else if (CurrentScore > 9) {
    sleep(1000).then(() => {
      WinningScreen();
    }); // Wait 1 second before displaying a win screen
    return; // Return just in case if something will go wrong
  }

  // Make both of the answer to LowerCase so it wont break if the answer wont be the same
  if (vastaus.value.toLowerCase() == AnimalName.toLowerCase()) {
    CorrentAnswer();
    vastaus.value = ""; // Restart the vastaus value to make it blank
  } else {
    WrongAnswer();
    vastaus.value = ""; // Restart the vastaus value to make it blank
  }
}
