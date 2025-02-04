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
      Hints: ["karvaton häntä", "nopeasti"],
    },
    {
      Name: "Kissa",
      Info: "laiska, riehuu yöllä, hengittää kynsillä",
      Hints: ["voi purra sinua", "tykkää 'Whiskas'-ruoasta"],
    },
    {
      Name: "Orava",
      Info: "ruskea, pieni, pitää maapähkinöistä",
      Hints: ["nopeasti", "Nukkuu talvella"],
    },
    {
      Name: "Hai",
      Info: "ui vedessä, voi tappaa noin 7 ihmistä vuodessa",
      Hints: ["Uintia ei voi lopettaa", "Voi haistaa verta"],
    },
  ],
};

const start = document.getElementById("start");
const startScreen = document.getElementById("startScreen");

function StartGame() {
  startScreen.remove();
}

function CheckAnswer() {}

function Test() {}

for (let i = 0; i < animals.Data.length; i++) {
  console.log(animals.Data[i]);
}
