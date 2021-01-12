const isItSaturdayToday = (date) => {
  const weekDay = date.getDay(); 
  if(weekDay === 6) {
    return true; 
  }
    return false; 
   }
  
  
  const daysUntil = (date) => {
    const today = date.getDay(); 
    const daysUntilSaturday  = 6 - today; 
    return daysUntilSaturday; 
  }; 
  
  export {
    isItSaturdayToday,
    daysUntil
  }
  