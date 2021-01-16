// Här är filen du ska jobba i! En funktion ska svara på
// om det är lördag idag eller inte och en funktion ska
// svara på hur många dagar det är kvar.

// Den här funktionen ska returnera true om det är lördag
// och false om det inte är lördag
const isItSaturdayToday = (date) => {
  // const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let today = new Date();
  let day = today.getDay();
  
  return (day === 6);
}

// Denna funktion ska returnera hur många dagar det är
// kvar till lördag
const daysUntil = (date) => {
  let today = new Date();
  let day = today.getDay();
  if (day === 0) {
    return 7;
  }
  return (6 - day);
}

export {
  isItSaturdayToday,
  daysUntil
}