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
    // Helper function to count keyword appearances in title and subtitle
    const countKeywordAppearances = (text: string, keyword: string): number => {
        const regex = new RegExp(keyword, 'gi'); // 'gi' for case-insensitive and global search
        const matches = text.match(regex);
        return matches ? matches.length : 0;
    };

    // Calculate keyword appearances, logarithmically transformed rating counts, and average ratings
    let totalKeywordAppearances = 0;
    let totalLogRatingCount = 0;
    let totalRating = 0;

    top10AppsData.forEach(app => {
        totalKeywordAppearances += countKeywordAppearances(
            app.name + ' ' + app.subtitle,
            keyword,
        );
        totalLogRatingCount += Math.log1p(app.ratingCount);
        totalRating += app.rating;
    });

    // Calculate averages
    const avgKeywordAppearance = totalKeywordAppearances / top10AppsData.length;
    const avgLogRatingCount = totalLogRatingCount / top10AppsData.length;
    const avgRating = totalRating / top10AppsData.length;

    // Normalize and combine the factors to calculate difficulty
    // Assuming the maximum average appearances could be up to 2 (once in title, once in subtitle)
    const normalizedKeywordAppearance = (avgKeywordAppearance / 2) * 100;
    const normalizedLogRatingCount =
        (avgLogRatingCount / Math.log1p(100000)) * 100; // Example normalization
    const normalizedRating = (avgRating / 5.0) * 100;

    // Combine normalized values for final difficulty score
    const difficultyScore =
        (normalizedKeywordAppearance +
            normalizedLogRatingCount +
            normalizedRating) /
        3;

    return difficultyScore;
};

export const calculateDifficultyEx = (
    top10AppsData: AppData[],
    keyword: string,
): number => {
    // Escape special characters in the keyword for regex
    const escapeRegExp = (string: string) =>
        string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const escapedKeyword = escapeRegExp(keyword);

    // Helper function to count keyword appearances accurately
    const countKeywordAppearances = (text: string, keyword: string): number => {
        const regex = new RegExp(`\\b${keyword}\\b`, 'gi'); // Use word boundaries to match whole words
        const matches = text.match(regex);
        return matches ? matches.length : 0;
    };

    let totalKeywordAppearances = 0;
    let totalLogRatingCount = 0;
    let totalRating = 0;

    top10AppsData.forEach(app => {
        totalKeywordAppearances += countKeywordAppearances(
            app.name + ' ' + app.subtitle,
            escapedKeyword,
        );
        totalLogRatingCount += Math.log1p(app.ratingCount);
        totalRating += app.rating;
    });

    const avgKeywordAppearance = totalKeywordAppearances / top10AppsData.length;
    const avgLogRatingCount = totalLogRatingCount / top10AppsData.length;
    const avgRating = totalRating / top10AppsData.length;

    // Dynamic normalization based on dataset analysis (placeholder values, should be calculated)
    const maxAvgKeywordAppearance = 2; // Placeholder, should be based on data
    const maxLogRatingCount = Math.log1p(20000000); // Placeholder, should be based on data
    const maxRating = 5.0; // Typically the maximum rating

    const normalizedKeywordAppearance =
        (avgKeywordAppearance / maxAvgKeywordAppearance) * 100;
    const normalizedLogRatingCount =
        (avgLogRatingCount / maxLogRatingCount) * 100;
    const normalizedRating = (avgRating / maxRating) * 100;

    // Introduce weights based on perceived importance
    const weightKeywordAppearance = 0.5;
    const weightLogRatingCount = 0.3;
    const weightRating = 0.2;

    // Weighted combination of normalized values for final difficulty score
    const difficultyScore =
        (normalizedKeywordAppearance * weightKeywordAppearance +
            normalizedLogRatingCount * weightLogRatingCount +
            normalizedRating * weightRating) /
        (weightKeywordAppearance + weightLogRatingCount + weightRating);

    return difficultyScore;
};

export const calculateDifficultyEx2 = (
    top10AppsData: AppData[],
    keyword: string,
): number => {
    // Escape special characters in the keyword for regex
    const escapeRegExp = (string: string) =>
        string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const escapedKeyword = escapeRegExp(keyword);

    // Helper function to check keyword presence in title and subtitle
    const checkKeywordPresence = (text: string, keyword: string): number => {
        const regex = new RegExp(`\\b${keyword}\\b`, 'gi'); // Use word boundaries to match whole words
        return regex.test(text) ? 1 : 0;
    };

    let keywordPresenceCount = 0;
    let totalLogRatingCount = 0;
    let totalRating = 0;

    top10AppsData.forEach(app => {
        // Check if the keyword is present in either the name or subtitle, not counting repetitions
        keywordPresenceCount += checkKeywordPresence(
            app.name + ' ' + app.subtitle,
            escapedKeyword,
        );
        totalLogRatingCount += Math.log1p(app.ratingCount);
        totalRating += app.rating;
    });

    const avgKeywordPresence = keywordPresenceCount / top10AppsData.length;
    const avgLogRatingCount = totalLogRatingCount / top10AppsData.length;
    const avgRating = totalRating / top10AppsData.length;

    // Normalization based on data (placeholders for dynamic values based on actual data analysis)
    const maxKeywordPresence = 1; // As we're now only checking for presence, this is always 1
    const maxLogRatingCount = Math.log1p(100000); // Placeholder, adjust based on data
    const maxRating = 5.0; // Maximum rating value

    const normalizedKeywordPresence =
        (avgKeywordPresence / maxKeywordPresence) * 100;
    const normalizedLogRatingCount =
        (avgLogRatingCount / maxLogRatingCount) * 100;
    const normalizedRating = (avgRating / maxRating) * 100;

    // Weighted combination of normalized values for final difficulty score
    // Weights can be adjusted based on perceived importance
    const weightKeywordPresence = 0.4;
    const weightLogRatingCount = 0.3;
    const weightRating = 0.3;

    const difficultyScore =
        (normalizedKeywordPresence * weightKeywordPresence +
            normalizedLogRatingCount * weightLogRatingCount +
            normalizedRating * weightRating) /
        (weightKeywordPresence + weightLogRatingCount + weightRating);

    return difficultyScore;
};
