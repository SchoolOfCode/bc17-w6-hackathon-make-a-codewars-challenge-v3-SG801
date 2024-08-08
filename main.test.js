// importing the test abd expect from playwright library and also the function countVowelfrom main.js.
import {test, expect} from '@playwright/test';
import { countVowel } from './main.js';
import { error } from 'console';
// creating a test suite
test('count the number of vowels in a string', async ({page}) =>{
    const testCase = [
        {str:'Coding',expectedCount:2},
        {str:'Hijango',expectedCount:3},
        {str:'CodeNinja',error:'enter a 8 or less character word'},];
}
)
