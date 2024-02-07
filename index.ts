import { countries } from './countryCodes';
import { fetchData } from './appleMediaServiceRequest';
import {
    calculateDifficulty,
    calculateDifficultyEx,
    calculateDifficultyEx2,
} from './difficultyAlgorithm';

if (process.argv.length < 4) {
    console.log('Usage: bun run index.ts <countryCode> <keyword>');
    process.exit(1);
}

const COUNTRY_CODE = process.argv[2];
const KEYWORDS = process.argv[3];

if (!countries[COUNTRY_CODE]) {
    console.log('Invalid country code');
    process.exit(1);
}

const runJob = async () => {
    const appData = await fetchData(COUNTRY_CODE, KEYWORDS);
    if (appData !== undefined) {
        const difficulty = calculateDifficulty(appData, KEYWORDS);
        const difficultyEx = calculateDifficultyEx(appData, KEYWORDS);
        const difficultyEx2 = calculateDifficultyEx2(appData, KEYWORDS);
        console.log(
            `Keyword: ${KEYWORDS}, Country: ${countries[COUNTRY_CODE]}, Difficulty: ${difficulty}`,
        );
        console.log(
            `Ex - Keyword: ${KEYWORDS}, Country: ${countries[COUNTRY_CODE]}, Difficulty: ${difficultyEx}`,
        );
        console.log(
            `Ex2 - Keyword: ${KEYWORDS}, Country: ${countries[COUNTRY_CODE]}, Difficulty: ${difficultyEx2}`,
        );
    } else {
        console.log('No data found');
    }
};

runJob();
