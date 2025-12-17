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
    });

    // Tests for getActualSleepHours
    describe.skip("getActualSleepHours", () => {

    });

    // Tests for getIdealSleepHours
    describe.skip("getIdealSleepHours", () => {

    });

    // Tests for calculateSleepDebt
    describe.skip("calculateSleepDebt", () => {

    });
});