import type { AppData } from "./types";

function calculateDifficulty(top10AppsData: AppData[], keyword: string): number {
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
        totalKeywordAppearances += countKeywordAppearances(app.title + ' ' + app.subtitle, keyword);
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
    const normalizedLogRatingCount = (avgLogRatingCount / Math.log1p(100000)) * 100; // Example normalization
    const normalizedRating = (avgRating / 5.0) * 100;

    // Combine normalized values for final difficulty score
    const difficultyScore = (normalizedKeywordAppearance + normalizedLogRatingCount + normalizedRating) / 3;

    return difficultyScore;
}

// Example usage with placeholder data
const top10AppsData: AppData[] = [
    { title: "App One", subtitle: "The Best App", rating: 4.5, ratingCount: 2 },
    { title: "Keyword App", subtitle: "Another Keyword Example", rating: 4.0, ratingCount: 4 },
    // Add more app data...
];

const keyword = "Keyword";
const difficultyScore = calculateDifficulty(top10AppsData, keyword);
console.log(`Difficulty Score: ${difficultyScore}`);
