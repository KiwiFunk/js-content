function calculateDogAge(humanYears) {
    // Perform input validation
    if (typeof humanYears !== 'number' || isNaN(humanYears) || humanYears < 0) {
        return 0;
    }

    // Return a result based on the validated input
    return humanYears <= 0 ? 0 : humanYears === 1 ? 10.5 : humanYears === 2 ? 21 : 21 + (humanYears - 2) * 4;
}

module.exports = {
    calculateDogAge
};