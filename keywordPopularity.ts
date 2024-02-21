import type { Response } from './types.ts';
import type { RequestRedirect } from 'node-fetch';
import { handleFiles } from './handleFiles.ts';
import { extractCookies } from './handleFiles.ts';

export const getKeywordsPopularity = async (
    appName: string,
    countryCode: string,
    keywords: string[],
) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            Cookie: '',
            'X-XSRF-TOKEN-CM': '',
        },
        body: JSON.stringify({
            storefronts: [countryCode],
            terms: keywords,
        }),
        redirect: 'follow' as RequestRedirect,
    };

    console.log('Extracting cookies...');
    const cookies = await extractCookies('cookie');
    // find XSRF-TOKEN-CM from the cookies string and extract the value after the equals sign
    const xsrfToken = cookies
        .split(';')
        .find(cookie => cookie.startsWith('XSRF-TOKEN-CM'));
    if (xsrfToken) {
        console.log(`Found XSRF-TOKEN-CM: ${xsrfToken.split('=')[1]}`);
        requestOptions.headers = {
            ...requestOptions.headers,
            'X-XSRF-TOKEN-CM': xsrfToken.split('=')[1],
        };

        console.log(requestOptions.headers);
    } else {
        throw new Error('XSRF-TOKEN-CM not found');
    }

    requestOptions.headers = {
        ...requestOptions.headers,
        Cookie: cookies,
    };

    try {
        console.log('Fetching keyword popularity data...');
        const response = await fetch(
            'https://app.searchads.apple.com/cm/api/v2/keywords/popularities?adamId=6472562384',
            requestOptions,
        );
        const result = (await response.json()) as Response;
        const data = result.data;

        // filter the data to only include the name and popularity fields
        const filteredData = data.map(keyword => ({
            name: keyword.name,
            popularity: keyword.popularity,
        }));

        console.log(filteredData);

        return handleFiles(appName, countryCode, data);
    } catch (error) {
        console.error('Failed to fetch keyword popularity data:', error);
        throw new Error('Error fetching keyword popularity data');
    }
};
