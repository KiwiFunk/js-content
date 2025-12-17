function registerRunner(age, registeredEarly) {

    // Race number is an integer between 0 and 1999
    let raceNumber;
    let startTime;
    let message;

    const getRaceNumber = (lo, hi) => {
        return Math.floor(Math.random() * (hi - lo)) + lo;
    }

    // Early Adults (Over 18) are assigned 1000-1999 and race at 9:30 am
    if (age > 18 && registeredEarly) {
        raceNumber = getRaceNumber(1000, 2000);
        startTime = '9:30 am';
        message = `Your race number is ${raceNumber}. You will race at ${startTime}.`;
    } 
    // Late Adults (Over 18) are assigned 0-999 and and race at 11:00 am
    else if (age > 18 && !registeredEarly) {
        raceNumber = getRaceNumber(0, 1000);
        startTime = '11:00 am';
        message = `Your race number is ${raceNumber}. You will race at ${startTime}.`;

    }
    // Youth are assigned 0-999 and race at 12:30 pm
    else if (age <= 18) {
        raceNumber = getRaceNumber(0, 1000);
        // If 18, they need to see the registration desk
        age === 18 ? startTime = '' : startTime = '12:30 pm';
        age === 18 ? message = 'Please see the registration desk.' : message = `Your race number is ${raceNumber}. You will race at ${startTime}.`;
    }
    
    // Return Object and message
    return { raceNumber, startTime, message };
    
}

module.exports = {
    registerRunner
}
