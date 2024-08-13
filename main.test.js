// importing the test abd expect from playwright library and also the function countVowelfrom main.js.
import { test, expect } from 'vitest';
import { countVowel } from './main.js';

// creating a test suite
test('count the number of vowels in a string', async () => {
    const testCase = [
        { str: 'Coding', expectedCount: 2 },
        { str: 'Hijango', expectedCount: 3 },
        { str: 'CodeNinja', expectedCount: null, error: 'enter an 8 or less character word' }
    ];
    for (const { str, expectedCount} of testCase) {
        
            const actualCount = countVowel(str);
            expect(actualCount).toBe(expectedCount);
            console.log(`Test for word "${str}": expected ${expectedCount}, got ${actualCount}`);
        }
    }
);

