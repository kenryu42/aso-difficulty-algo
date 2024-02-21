import { countries } from './countryCodes';
import { fetchTop10AppsData } from './appleMediaServiceRequest';
import { calculateDifficulty } from './difficultyAlgorithm';
import { getKeywordsPopularity } from './keywordPopularity';
import { writeDifficultyToKeyword } from './handleFiles';

const preprocessArgs = () => {
    if (process.argv.length < 5) {
        console.log('Usage: bun index.ts <appname> <countryCode> <keyword>');
        process.exit(1);
    }

    const appName = process.argv[2];
    const countryCode = process.argv[3].toUpperCase();
    const keywords = [];

    if (!countries[countryCode]) {
        console.log('Invalid country code');
        process.exit(1);
    }

    for (let i = 4; i < process.argv.length; i++) {
        const inputKeywords = process.argv[i].split(/\u3000/);
        if (inputKeywords.length > 1) {
            keywords.push(...inputKeywords);
        } else {
            keywords.push(process.argv[i]);
        }
    }

    return { appName, countryCode, keywords };
};

const runJob = async () => {
    const { appName, countryCode, keywords } = preprocessArgs();

    console.log(
        `App: ${appName}\nCountry: ${countries[countryCode]}\nKeywords: ${Array.isArray(keywords)}`,
    );

    const fileName = await getKeywordsPopularity(
        appName,
        countryCode,
        keywords,
    );

    for (const keyword of keywords) {
        const appData = await fetchTop10AppsData(countryCode, keyword);

        if (appData !== undefined) {
            const difficultyScore = calculateDifficulty(appData, keyword);
            writeDifficultyToKeyword(fileName, keyword, difficultyScore);

            console.log(
                `Keyword: ${keyword}\nCountry: ${countries[countryCode]}\nDifficulty: ${difficultyScore}`,
            );
        } else {
            console.log('No data found');
        }
    }
};

runJob();
