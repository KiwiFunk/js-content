const startingMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

class MessageDecoder {
    constructor(message) {
        // Take in parameter, and spread into a new array inside the class instance to avoid mutation of original array
        this.message = [...message];
    }

    // Remove the last element from the message array
    removeLastElement() {
        this.message.pop();
    }

    addToEnd(...args) {
        // Validate the arguments to ensure they are type str
        cleaned = args.filter(arg => typeof arg === 'string');

        // Spread cleaned arguments and push to the end of the message array
        this.message.push(...cleaned);     
    }

    replaceByIndex(index, newValue) {
        // Validate input types and range
        if (typeof index === 'number' && index >= 0 && index < this.message.length && typeof newValue === 'string') {
            this.message[index] = newValue;
        } else {
            console.error('Invalid index or newValue. Ensure the index is within range and newValue is a string.');
        }
    }


    removeFirstElement() {
        // your code here
    }

    addToBeginning() {
        // your code here
    }

    replaceMultipleWithSingle() {
        // your code here
    }

    joinArrayToString() {
        // your code here
    }

    revealSecretMessage() {
        this.removeLastElement();
        this.addToEnd('to', 'Program');
        this.replaceByIndex('easily', 'right');
        this.removeFirstElement();
        this.addToBeginning('Programming');

        const getIndex = this.message.indexOf('get');
        this.replaceMultipleWithSingle(getIndex, getIndex + 4, 'know,');

        return this.joinArrayToString();
    }

    getMessage() {
        return [...this.message];
    }

    getLength() {
        return this.message.length;
    }
}

if (require.main === module) {
    const decoder = new MessageDecoder(startingMessage);
    console.log(decoder.revealSecretMessage());
}

module.exports = { MessageDecoder, startingMessage };