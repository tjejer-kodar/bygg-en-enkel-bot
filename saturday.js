// Här är filen du ska jobba i! En funktion ska svara på
// om det är lördag idag eller inte och en funktion ska
// svara på hur många dagar det är kvar.

// Den här funktionen ska returnera true om det är lördag
// och false om det inte är lördag
const d = new Date();
const n = d.getDay();

const dagar = [
  "söndag",
  "måndag",
  "tisdag",
  "onsdag",
  "torsdag",
  "fredag",
  "lördag",
];

let dag = document.querySelector("#day");
dag.innerText = "\xa0" + dagar[n];

let mess = document.querySelector("#message");
let bg = document.querySelector(".container");

const isItSaturdayToday = (date) => {
  return n === 6;
};

// Denna funktion ska returnera hur många dagar det är
// kvar till lördag
const daysUntil = (date) => {
  return 6 - n;
};

if (n === 0) {
  mess.innerText = "Ta med varm choklad och gå ut!";
  bg.style.backgroundImage = "url('bgsön.png')";
} else if (n === 1) {
  mess.innerText = "Ny vecka, nya utmaningar och möjligheter";
  bg.style.backgroundImage = "url('bgmån.png')";
} else if (n === 2) {
  mess.innerText = "Detta kan bli en bra dag!";
  bg.style.backgroundImage = "url('bgtis.png')";
} else if (n === 3) {
  mess.innerText = "Halva veckan har snart gått!";
  bg.style.backgroundImage = "url('bgons.png')";
} else if (n === 4) {
  mess.innerText = "Håll ut, snart helg!";
  bg.style.backgroundImage = "url('bgtor.png')";
} else if (n === 5) {
  mess.innerText = "Det betyder fredagsmyyys!!!";
  bg.style.backgroundImage = "url('bgfre.png')";
} else if (n === 6) {
  mess.innerText = "Äntligen!! Bästa dagen.";
  bg.style.backgroundImage = "url('bglör.png')";
}

export { isItSaturdayToday, daysUntil };
