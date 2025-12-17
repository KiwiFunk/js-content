function magicEightBall() {

    const i = Math.random();

    // Match responses to those expected by test suite
    const responses = [
        'It is certain',
        'It is decidedly so',
        'Reply hazy try again',
        'Cannot predict now',
        'Do not count on it',
        'My sources say no',
        'Outlook not so good',
        'Signs point to yes'
    ];
    // Return response based on random number index
    return responses[Math.floor(i * responses.length)] || 'Error: Invalid response';
}

function logMagicEightBall(userQuestion, userName = null ) {

    userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
    console.log(`User's question: ${userQuestion}`);
    console.log(magicEightBall());
}

module.exports = { magicEightBall, logMagicEightBall };