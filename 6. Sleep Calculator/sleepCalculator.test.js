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
    describe.skip("getIdealSleepHours", () => {

    });

    // Tests for calculateSleepDebt
    describe.skip("calculateSleepDebt", () => {

    });
});