// importing the test abd expect from playwright library and also the function countVowelfrom main.js.
import { test, expect } from '@playwright/test';
import { countVowel } from './main.js';

// creating a test suite
test('count the number of vowels in a string', async () => {
    const testCase = [
        { str: 'Coding', expectedCount: 2 },
        { str: 'Hijango', expectedCount: 3 },
        { str: 'CodeNinja', expectedCount: null, error: 'enter a 8 or less character word' },];
    for (const { str, expectedCount, error } of testCase) {
        if (error) {
            expect(() => countVowel(str)).toThrow(error);
        } else {

            const actualCount = countVowel(str);
            expect(actualCount).toBe(expectedCount);
            console.log(`Test for word "${str}": expected ${expectedCount}, got ${result}`);
        }
    }


}
);

