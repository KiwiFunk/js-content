function convertToWhaleTalk(text) {

    // Validate input
    if (typeof text !== 'string' || text === null || text === undefined) return '';

    // Store an array of vowels that need to be extracted
    const vowels = ['A', 'E', 'I', 'O', 'U'];

    // Split the input string into an array of characters (UPPERCASE)
    const chars = text.toUpperCase().split('');
    
    // Variable to hold cleaned text string
    let whaleTalk = '';

    // Iterate through the array and append vowels to whaleTalk string
    chars.forEach(char => {
        if (vowels.includes(char)) {
            whaleTalk += char;                                      // Append the vowel to the result string
            if (char === 'E' || char === 'U') whaleTalk += char;    // Double the 'E' and 'U' vowels
        }
    });
    // Return final string
    return whaleTalk;
}

module.exports = convertToWhaleTalk;