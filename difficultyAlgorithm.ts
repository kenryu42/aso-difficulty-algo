import type { AppData } from './types';

/**
 * Calculates the difficulty score for a given keyword based on the top 10 apps data.
 *
 * @param top10AppsData - An array of AppData objects representing the top 10 apps.
 * @param keyword - The keyword to calculate the difficulty score for.
 * @returns The difficulty score for the keyword.
 */
export const calculateDifficulty = (
    top10AppsData: AppData[],
    keyword: string,
): number => {
    const escapeRegExp = (string: string) =>
        string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const escapedKeyword = escapeRegExp(keyword);

    const checkKeywordPositionScore = (text: string): number => {
        const regex = new RegExp(escapedKeyword, 'gi');
        const match = regex.exec(text);

        if (match) {
            const position = match.index;
            const maxLength = 60;

            return Math.max(0, 1 - position / maxLength);
        }

        return 0;
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const checkKeywordPresence = (text: string): number => {
        const regex = new RegExp(escapedKeyword, 'gi');

        return regex.test(text) ? 1 : 0;
    };

    let keywordPositionScoreSum = 0;
    let totalRating = 0;
    let totalRatingCountLog = 0;
    let maxRatingCountLog = 0;
    let maxRatingCount = 0;
    let actualTotalRatingCount = 0;

    top10AppsData.forEach((app, index) => {
        const logRatingCount = Math.log1p(app.ratingCount);

        keywordPositionScoreSum += checkKeywordPositionScore(
            `${app.name} ${app.subtitle}`,
        );
        totalRating += app.rating;
        totalRatingCountLog += logRatingCount;
        actualTotalRatingCount += app.ratingCount;

        if (logRatingCount > maxRatingCountLog) {
            maxRatingCountLog = logRatingCount;
        }
        if (app.ratingCount > maxRatingCount) {
            maxRatingCount = app.ratingCount;
        }

        console.log(`${index + 1}: ${app.name}`);
        console.log(`${app.subtitle}`);
        console.log(
            `Keyword Position Score: ${checkKeywordPositionScore(`${app.name} ${app.subtitle}`)}`,
        );
        console.log(`Rating Count: ${app.ratingCount}`);
        console.log(`Rating: ${app.rating}\n`);
    });

    console.log(`maxRatingCount: ${maxRatingCount}\n`);

    const avgKeywordPositionScore =
        keywordPositionScoreSum / top10AppsData.length;
    const avgRating = totalRating / top10AppsData.length;
    const avgRatingCountLog = totalRatingCountLog / top10AppsData.length;
    const avgActualRatingCount = actualTotalRatingCount / top10AppsData.length;

    const competitivenessMultiplier = 1 + Math.log1p(avgActualRatingCount) / 90;

    const normalizedKeywordPositionScore = (avgKeywordPositionScore / 1) * 100;
    const normalizedRating = (avgRating / 5.0) * 100;
    const normalizedRatingCount =
        (avgRatingCountLog / maxRatingCountLog) *
        100 *
        competitivenessMultiplier;

    console.log(`competitivenessMultiplier: ${competitivenessMultiplier}\n`);
    console.log(`avgKeywordAppearance: ${avgKeywordPositionScore}`);
    console.log(`avgRating: ${avgRating}`);
    console.log(`avgRatingCountLog: ${avgRatingCountLog}\n`);
    console.log(
        `normalizedKeywordPositionScore: ${normalizedKeywordPositionScore}`,
    );
    console.log(`normalizedRating: ${normalizedRating}`);
    console.log(`normalizedRatingCount: ${normalizedRatingCount}\n`);

    const weightKeywordPresence = 0.1;
    const weightmaxRatingCountLog = 0.8;
    const weightRating = 0.1;

    console.log(
        `Keyword Presence Score: ${normalizedKeywordPositionScore * weightKeywordPresence} / ${weightKeywordPresence * 100}`,
    );
    console.log(
        `Rating Count Score: ${normalizedRatingCount * weightmaxRatingCountLog} / ${weightmaxRatingCountLog * 100}`,
    );
    console.log(
        `Rating Score: ${normalizedRating * weightRating} / ${weightRating * 100}\n`,
    );

    const difficultyScore =
        (normalizedKeywordPositionScore * weightKeywordPresence +
            normalizedRatingCount * weightmaxRatingCountLog +
            normalizedRating * weightRating) /
        (weightKeywordPresence + weightmaxRatingCountLog + weightRating);

    return Math.round(difficultyScore);
};
