const myHeaders = new Headers();
myHeaders.append('authority', 'tools.applemediaservices.com');
myHeaders.append('accept', 'application/json, text/plain, */*');
myHeaders.append(
    'accept-language',
    'en-US,en;q=0.9,ja;q=0.8,zh-CN;q=0.7,zh;q=0.6,zh-TW;q=0.5',
);
// myHeaders.append("cookie", "_sp_ses.0627=*; _pk_scroll_depth.6666cd76f96956469e7be39d750cc7d9=100; _pk_scroll_depth.34fc5e334f9d5ba59fbbc5a9562e21c2=100; _sp_id.0627=603c563c-e246-47ce-9e6e-f492a91982db.1707110895.1.1707112193.1707110895.fccb67ca-11f0-4f18-8ab4-02ef07e346d0; _pineapple_medusa_session=SfUlx%2B%2FXxD7%2FxGaAQwld3wcZ2zekeY5htGqFM6QHMR%2FO8nNfzXaq%2FkwIZd5jGTVxNYYSKvFl4IxgdiVVkElHbpYNWqgvwRJDvI80KbWRen8ZjU%2BGZLjqHnrqg1DJKxNEevlrx2IziDJVwVwZpak%3D--xSi4xRS9jwB4TQLX--8J9AW3xa65Bbi4Jjfdlp%2BQ%3D%3D; _pineapple_medusa_session=iKLe1WedwECKALZF%2FvHCcoyXsvJK61NlVXljwU%2F%2BBxhwXrMs7U8WQHsL7pTI11i2la88menX9B0l2DW7eG3FfMIFpRGsedWK8i6V%2FG2RMljQqIFXZ2VVw%2BGdekLAB0jusHtYsHK4EIutNH8%2BaYQ%3D--935Pz96QAmD8AxvR--5Xq6JOgMiS5hI5nXPLm%2B%2Fw%3D%3D");
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
// myHeaders.append("x-csrf-token", "VBT1SAGTUEOw09924lFVM/AcTj8EK4vg24PW1nHq2fOOZShWzsTJ7Dap0Ov2dRvaoXdrZaq6VJTJOJyYOfyYKw==");
// myHeaders.append("x-requested-with", "XMLHttpRequest");

const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow' as RequestRedirect,
};

try {
    const response = await fetch(
        'https://tools.applemediaservices.com/api/apple-media/apps/JP/search.json?types=apps,app-bundles&term=gym&limit=25&l=en-US&platform=iphone&additionalPlatforms=iphone,mac,appletv,ipad,watch,web',
        requestOptions,
    );
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.log('error', error);
}
