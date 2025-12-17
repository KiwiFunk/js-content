const {
    getSleepHours,
    getActualSleepHours,
    getIdealSleepHours,
    calculateSleepDebt
} = require("./sleepCalculator")

describe("Sleep Calculator", () => {
    // Tests for getSleepHours
    describe("getSleepHours", () => {
        // Tests for this function
        test('returns correct weekly total for 8 hours/night', () => {
            expect(getSleepHours('monday')).toBe(8);
            expect(getSleepHours('tuesday')).toBe(7);
            expect(getSleepHours('wednesday')).toBe(6);
            expect(getSleepHours('thursday')).toBe(7);
            expect(getSleepHours('friday')).toBe(5);
            expect(getSleepHours('saturday')).toBe(9);
            expect(getSleepHours('sunday')).toBe(8);
        });

        test('returns error for invalid day', () => {
            expect(getSleepHours('invalidDay')).toBeInstanceOf(Error);
        });

        // See if the function can handle different casing
        test('is case insensitive for day input', () => {
            expect(getSleepHours('Monday')).toBe(8);
            expect(getSleepHours('TUESDAY')).toBe(7);
            expect(getSleepHours('WeDnEsDaY')).toBe(6);
            expect(getSleepHours('Sunday')).toBe(8);
        });
    });

    // Tests for getActualSleepHours
    describe("getActualSleepHours", () => {
        test('returns correct total sleep hours for the week', () => {
            expect(getActualSleepHours()).toBe(50);
        });
    });

    // Tests for getIdealSleepHours
    describe("getIdealSleepHours", () => {
        test('returns correct value for given ideal hours/night', () => {
            expect(getIdealSleepHours(6)).toBe(42);
            expect(getIdealSleepHours(7)).toBe(49);
            expect(getIdealSleepHours(8)).toBe(56);
            expect(getIdealSleepHours(12)).toBe(84);
        });
    });

    // Tests for calculateSleepDebt
    describe("calculateSleepDebt", () => {

        // Handle Ideal Sleep Hours being the same as Actual Sleep Hours
        test('returns correct message for perfect sleep', () => {
            expect(calculateSleepDebt(50 / 7)).toBe('Perfect amount of sleep.');
        });

        // Handle Ideal Sleep Hours being less than Actual Sleep Hours
        test('returns correct message for excess sleep', () => {
            // By default, getActualSleepHours() returns 50
            expect(calculateSleepDebt(5)).toBe('You got 15 hour(s) more sleep than needed.');
            expect(calculateSleepDebt(6)).toBe('You got 8 hour(s) more sleep than needed.');
            expect(calculateSleepDebt(7)).toBe('You got 1 hour(s) more sleep than needed.');
        });

        // Handle Ideal Sleep Hours being more than Actual Sleep Hours
        test('returns correct message for sleep deficit', () => {
            // By default, getActualSleepHours() returns 50
            expect(calculateSleepDebt(9)).toBe('You got 13 hour(s) less sleep than needed. Get some rest.');
            expect(calculateSleepDebt(10)).toBe('You got 20 hour(s) less sleep than needed. Get some rest.');
            expect(calculateSleepDebt(11)).toBe('You got 27 hour(s) less sleep than needed. Get some rest.');
        });

        // Handle lack of Ideal Sleep Hours parameter
        test('returns correct message for default ideal sleep hours', () => {
            // By default, getActualSleepHours() returns 50 and ideal default should be 8
            expect(calculateSleepDebt()).toBe('You got 6 hour(s) less sleep than needed. Get some rest.');
        });

        // Edge case: Ideal Sleep Hours is zero
        test('returns correct message for zero ideal sleep hours', () => {
            expect(calculateSleepDebt(0)).toBe('You got 50 hour(s) more sleep than needed.');
        });

        // Edge case: Negative Ideal Sleep Hours
        test('returns correct message for negative ideal sleep hours', () => {
            expect(calculateSleepDebt(-5)).toBe('You got 85 hour(s) more sleep than needed.');
        });
    });
});