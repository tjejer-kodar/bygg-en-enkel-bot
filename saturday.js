// Den här funktionen ska returnera true om det är lördag
// och false om det inte är lördag
const isItSaturdayToday = date => {
  const weekDay = date.getDay();
  if (weekDay === 6) {
    return true;
  }
  return false;
};

// Denna funktion ska returnera hur många dagar det är
// kvar till lördag
const daysUntil = date => {
  const weekDay = date.getDay();
  const untilFriday = 6 - weekDay;
  return untilFriday;
};

export { isItSaturdayToday, daysUntil };
