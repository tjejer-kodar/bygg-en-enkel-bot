// Här är filen du ska jobba i! En funktion ska svara på
// om det är lördag idag eller inte och en funktion ska
// svara på hur många dagar det är kvar.

// Den här funktionen ska returnera true om det är lördag
// och false om det inte är lördag


const d = new Date();
const x = d.getDay();

const dagar = [
  "söndag.",
  "måndag.",
  "tisdag.",
  "onsdag.",
  "torsdag.",
  "fredag.",
  "lördag.",
];

let dag = document.querySelector("#day");
dag.innerText = "\xa0" + dagar[x];
let mess = document.querySelector("#message");

const isItSaturdayToday = () => {
  return x === 6;
}


// Denna funktion ska returnera hur många dagar det är
// kvar till lördag
const daysUntil = () => {
  return 6 - x;
};



if (x == 0) {
  mess.innerText = "Långpromenad och soffhäng dagen."; }
else if (x == 1) {
  mess.innerText = "Favorit låten på och så dansar vi in den nya veckan!"; }
else if (x == 2) {
  mess.innerText = "Unna dig en rolig kvällsaktivitet idag."; }
else if (x == 3) {
  mess.innerText = "On Wednesdays we wear pink!"; }
else if (x == 4) {
  mess.innerText = "Idag är en extra bra dag att skicka iväg en komplimang (och kanske få en tillbaka?)"; }
else if (x == 5) {
 mess.innerText = "Tjoho fredag, idag åker favorit tröjan på!"; }
else if (x == 6) {
 mess.innerText = "Lördagsmys hela dagen lång."; }
  
 

export {
  isItSaturdayToday,
  daysUntil
}
