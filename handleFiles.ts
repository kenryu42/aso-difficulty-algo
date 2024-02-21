import fs from 'fs';
import util from 'util';
import type { Keyword } from './types.ts';

export const handleFiles = (
    appName: string,
    storeFront: string,
    newKeywords: Keyword[],
) => {
    const fileName = `${appName}-${storeFront.toLowerCase()}-keywords.json`;
    // check if the file exists
    if (!fs.existsSync(fileName)) {
        // if not, create it with an empty array
        fs.writeFileSync(fileName, JSON.stringify([]), 'utf8');
    }

    // read the existing file
    const fileData = fs.readFileSync(fileName, 'utf8');

    // parse the file data to an array
    let keywords = JSON.parse(fileData);

    // filter the data to only include the name and popularity fields
    const filteredKeywords = newKeywords.map(keyword => ({
        name: keyword.name,
        popularity: keyword.popularity,
    }));

    // push the new data
    keywords.push(...filteredKeywords);

    // remove duplicates keeping the last one
    keywords = keywords.filter(
        (keyword: Keyword, index: number, self: Keyword[]) =>
            index === self.findIndex(t => t.name === keyword.name),
    );

    // sort the array by popularity
    keywords.sort((a: Keyword, b: Keyword) => b.popularity - a.popularity);

    // write the array back to the file
    fs.writeFileSync(fileName, JSON.stringify(keywords, null, 2), 'utf8');

    console.log(
        `Successfully added ${newKeywords.length} keywords to ${fileName}`,
    );

    return fileName;
};

export const writeDifficultyToKeyword = (
    fileName: string,
    keyword: string,
    difficulty: number,
) => {
    const fileData = fs.readFileSync(fileName, 'utf8');
    const keywords = JSON.parse(fileData);

    const updatedKeywords = keywords.map((k: Keyword) => {
        if (k.name === keyword) {
            return { ...k, difficulty };
        }
        return k;
    });

    fs.writeFileSync(
        fileName,
        JSON.stringify(updatedKeywords, null, 2),
        'utf8',
    );
    console.log(`Successfully added difficulty to ${keyword}`);
};

const readFile = util.promisify(fs.readFile);

export const extractCookies = async (filename: string): Promise<string> => {
    const data = await readFile(filename, 'utf8');
    const cookies = data.split(';').map(cookie => cookie.trim());

    const desiredCookies = ['myacinfo', 'sa_user', 'XSRF-TOKEN-CM'];
    const extractedCookies = cookies.filter(cookie =>
        desiredCookies.some(desiredCookie => cookie.startsWith(desiredCookie)),
    );

    // extract the value of xsrf-token-cm, include the string after the equals sign
    // const xsrfToken = extractedCookies.find((cookie) =>
    //   cookie.startsWith("XSRF-TOKEN-CM")
    // );
    // if (xsrfToken) {
    //   extractedCookies.push(xsrfToken.split("=")[1]);
    // }

    return extractedCookies.join(';');
};
