// Här är filen du ska jobba i! En funktion ska svara på
// om det är lördag idag eller inte och en funktion ska
// svara på hur många dagar det är kvar.

// Den här funktionen ska returnera true om det är lördag
// och false om det inte är lördag
const isItSaturdayToday = (date) => {
  const newDate = new Date(date);

  var weekDay = new Array(7);
  weekDay[0] = "söndag";
  weekDay[1] = "måndag";
  weekDay[2] = "tisdag";
  weekDay[3] = "onsdag";
  weekDay[4] = "torsdag";
  weekDay[5] = "fredag";
  weekDay[6] = "lördag";


  var day = weekDay[newDate.getDay()]
 
 
  if (newDate.getDay() === 6) {
    document.querySelector("#greeting").innerHTML = "🍭 Dags för lördagsgodis 🍭";
    document.querySelector(".result-row2").classList.add("saturday-txt");
  }
  else if (newDate.getDay() === 5) {
    document.querySelector("#greeting").innerHTML = "🍿 Det är fredag, äntligen helg!! 🍿" ;
    bigFontSize();
  }
  else if (newDate.getDay() === 0) {
    document.querySelector("#greeting").innerHTML = "✨ Njut av din söndag ✨";
    bigFontSize();
  }
  else  {
    document.querySelector("#greeting").innerHTML =  "Idag är det " + day + ". Work hard, play hard!! 👩‍💻";
    bigFontSize();
  }
 
}


const bigFontSize = () => {
  document.querySelector(".result-row2").addEventListener("mouseover", function() {
    document.querySelector(".result-row2").style.fontSize = "3rem";
  })
  
 }



// Denna funktion ska returnera hur många dagar det är
// kvar till lördag
const daysUntil = (date) => {
  const newDate = new Date(date);
  const saturday = 6;
  const remainigDays = saturday - newDate.getDay();

  return remainigDays;


}



export {
  isItSaturdayToday,
  daysUntil,
}




