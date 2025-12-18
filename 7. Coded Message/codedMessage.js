const startingMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

class MessageDecoder {
    constructor(message) {
        // Take in parameter, and spread into a new array inside the class instance to avoid mutation of original array
        this.message = [...message];
    }

    // Remove the last element from the message array
    removeLastElement() {
        this.message.pop();
        // Enable method chaining by returning this
        return this;
    }

    addToEnd(...args) {
        // Validate the arguments to ensure they are type str
        const cleaned = args.filter(arg => typeof arg === 'string');

        this.message.push(...cleaned);  // Push cleaned arguments  
        return this;                    // For method chaining   
    }

    // Replace x with y in the message array
    replaceByIndex(x, y) {
        // Validate input types and range
        if (typeof x === 'string' && typeof y === 'string') {

            const i = this.message.indexOf(x);

            //Only modify array if match is found (indexOf returns -1 if not found)
            if (i !== -1) this.message[i] = y;
        
        } else {
            console.error('Invalid input types.');
        }
        return this; // For method chaining
    }

    removeFirstElement() {
        if (this.message.length === 0) {
            console.error('Message array is empty. Cannot remove first element.');
            return;
        } 
        this.message.shift();
        return this;
    }

    addToBeginning(...args) {
        // Validate the arguments to ensure they are type string
        const cleaned = args.filter(arg => typeof arg === 'string');
        this.message.unshift(...cleaned);
        return this;
    }

    replaceMultipleWithSingle(startIndex, endIndex, value) {
        // Validate input types
        if (typeof startIndex === 'number' && typeof endIndex === 'number' && typeof value === 'string') {
            // Validate index range
            if (startIndex >= 0 && startIndex < this.message.length && endIndex > startIndex && endIndex < this.message.length) {
                // Start Index, Count to remove, New Value
                this.message.splice(startIndex, endIndex - startIndex + 1, value);
            } else {
                console.error('Invalid start or end index.');
            }
        } else {
            console.error('Invalid arguments.');
        }
        return this;
    }

    joinArrayToString() {
        // Join elements of the message array into a single string with spaces
        return this.message.join(' ');
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