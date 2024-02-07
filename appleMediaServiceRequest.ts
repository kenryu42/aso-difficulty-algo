import type { IOSApps, AppData } from "./types";

const myHeaders = new Headers();
myHeaders.append('authority', 'tools.applemediaservices.com');
myHeaders.append('accept', 'application/json, text/plain, */*');
myHeaders.append(
    'accept-language',
    'en-US,en;q=0.9,ja;q=0.8,zh-CN;q=0.7,zh;q=0.6,zh-TW;q=0.5',
);
myHeaders.append('dnt', '1');
myHeaders.append(
    'referer',
    'https://tools.applemediaservices.com/apple-app-store-promote',
);
myHeaders.append(
    'sec-ch-ua',
    '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
);
myHeaders.append('sec-ch-ua-mobile', '?1');
myHeaders.append('sec-ch-ua-platform', '"Android"');
myHeaders.append('sec-fetch-dest', 'empty');
myHeaders.append('sec-fetch-mode', 'cors');
myHeaders.append('sec-fetch-site', 'same-origin');
myHeaders.append(
    'user-agent',
    'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Mobile Safari/537.36',
);

const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow' as RequestRedirect,
};

export const fetchData = async (
    countryCode: string,
    term: string,
    limit = 10,
) => {
    try {
        const baseURL = `https://tools.applemediaservices.com/api/apple-media/apps/${countryCode}/search.json?`;
        const params = new URLSearchParams({
            types: 'apps',
            term,
            limit: limit.toString(),
            l: 'en-US',
            platform: 'iphone',
            additionalPlatforms: 'iphone,mac,appletv,ipad,watch,web',
        }).toString();
        const response = await fetch(`${baseURL}${params}`, requestOptions);
        const result = (await response.json()) as IOSApps;
        const appList: AppData[] = result.apps.data.map((app) => ({
            name: app.attributes.name,
            subtitle: app.attributes.platformAttributes.ios.subtitle,
            rating: app.attributes.userRating.value,
            ratingCount: app.attributes.userRating.ratingCount,
        }));

        return appList;
    } catch (error) {
        console.log('error', error);
    }
};
