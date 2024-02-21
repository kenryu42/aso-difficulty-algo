export interface IOSApps {
    apps: Apps;
}

export interface Apps {
    href: string;
    data: AppsDatum[];
}

export interface AppsDatum {
    id: string;
    type: string;
    href: string;
    attributes: Attributes;
    relationships: Relationships;
    meta: Meta;
}

export interface Attributes {
    supportsArcade: boolean;
    familyShareEnabledDate: Date;
    isFirstPartyHideableApp: boolean;
    contentRatingsBySystem: ContentRatingsBySystem;
    deviceFamilies: string[];
    supportsStreamlinedBuy: boolean;
    url: string;
    usesLocationBackgroundMode: boolean;
    userRating: UserRating;
    firstVersionSupportingInAppPurchaseApi: string;
    name: string;
    genreDisplayName: string;
    isPreorder: boolean;
    isIOSBinaryMacOSCompatible: boolean;
    artistName: string;
    reviewsRestricted: boolean;
    sellerLabel: string;
    hasEula: boolean;
    platformAttributes: PlatformAttributes;
}

export interface ContentRatingsBySystem {
    appsApple: AppsApple;
}

export interface AppsApple {
    name: string;
    value: number;
    rank: number;
}

export interface PlatformAttributes {
    ios: Ios;
}

export interface Ios {
    seller: string;
    copyright: string;
    minimumMacOSVersion: string;
    isStandaloneWithCompanionForWatchOS: boolean;
    is32bitOnly: boolean;
    isAppleWatchSupported: boolean;
    requiredCapabilitiesForRealityDevice: string;
    isXROSCompatible: boolean;
    minimumXROSVersion: string;
    languageList: string[];
    hasSafariExtension: boolean;
    requiresGameController: boolean;
    requiredCapabilities: string;
    offers: Offer[];
    requires32bit: boolean;
    supportedLocales: SupportedLocale[];
    isSiriSupported: boolean;
    isGameCenterEnabled: boolean;
    releaseDate: Date;
    minimumOSVersion: string;
    hasInAppPurchases: boolean;
    bundleId: string;
    hasMessagesExtension: boolean;
    artwork: Artwork;
    supportsGameController: boolean;
    hasFamilyShareableInAppPurchases: boolean;
    isStandaloneForWatchOS: boolean;
    isHiddenFromSpringboard: boolean;
    isDeliveredInIOSAppForWatchOS: boolean;
    hasPrivacyPolicyText: boolean;
    editorialArtwork: EditorialArtwork;
    subtitle: string;
    supportsPassbook: boolean;
    requirementsString: string;
    externalVersionId: number;
}

export interface Artwork {
    width: number;
    height: number;
    url: string;
    bgColor: string;
    textColor1: string;
    textColor2: string;
    textColor3: string;
    textColor4: string;
}

export interface EditorialArtwork {
    contentIconTrimmedMonochrome: Artwork;
    contentIconTrimmed: Artwork;
    brandLogo: Artwork;
}

export interface Offer {
    buyParams: string;
    type: string;
    priceFormatted: string;
    price: number;
    currencyCode: string;
    assets: Asset[];
}

export interface Asset {
    flavor: string;
    size: number;
}

export interface SupportedLocale {
    name: string;
    tag: string;
}

export interface UserRating {
    value: number;
    ratingCount: number;
    ratingCountList: number[];
    ariaLabelForRatings: string;
}

export interface Meta {
    contentVersion: ContentVersion;
}

export interface ContentVersion {
    RTCI: number;
    MZ_INDEXER: number;
}

export interface Relationships {
    developer: Developer;
    genres: Developer;
}

export interface Developer {
    href: string;
    data: DeveloperDatum[];
}

export interface DeveloperDatum {
    id: string;
    type: string;
    href: string;
    attributes?: DeveloperAttributes;
}

export interface DeveloperAttributes {
    parentName: string;
    name: string;
    parentId: string;
    url: string;
}

export interface AppData {
    name: string;
    subtitle: string;
    rating: number;
    ratingCount: number;
}

export type CountryCodes = {
    [key: string]: string;
    AE: string;
    AG: string;
    AI: string;
    AL: string;
    AM: string;
    AO: string;
    AR: string;
    AT: string;
    AU: string;
    AZ: string;
    BB: string;
    BE: string;
    BF: string;
    BG: string;
    BH: string;
    BJ: string;
    BM: string;
    BN: string;
    BO: string;
    BR: string;
    BS: string;
    BT: string;
    BW: string;
    BY: string;
    BZ: string;
    CA: string;
    CG: string;
    CH: string;
    CL: string;
    CN: string;
    CO: string;
    CR: string;
    CV: string;
    CY: string;
    CZ: string;
    DE: string;
    DK: string;
    DM: string;
    DO: string;
    DZ: string;
    EC: string;
    EE: string;
    EG: string;
    ES: string;
    FI: string;
    FJ: string;
    FM: string;
    FR: string;
    GB: string;
    GD: string;
    GH: string;
    GM: string;
    GR: string;
    GT: string;
    GW: string;
    GY: string;
    HK: string;
    HN: string;
    HR: string;
    HU: string;
    ID: string;
    IE: string;
    IL: string;
    IN: string;
    IS: string;
    IT: string;
    JM: string;
    JO: string;
    JP: string;
    KE: string;
    KG: string;
    KH: string;
    KN: string;
    KR: string;
    KW: string;
    KY: string;
    KZ: string;
    LA: string;
    LB: string;
    LC: string;
    LK: string;
    LR: string;
    LT: string;
    LU: string;
    LV: string;
    MD: string;
    MG: string;
    MK: string;
    ML: string;
    MN: string;
    MO: string;
    MR: string;
    MS: string;
    MT: string;
    MU: string;
    MW: string;
    MX: string;
    MY: string;
    MZ: string;
    NA: string;
    NE: string;
    NG: string;
    NI: string;
    NL: string;
    NP: string;
    NO: string;
    NZ: string;
    OM: string;
    PA: string;
    PE: string;
    PG: string;
    PH: string;
    PK: string;
    PL: string;
    PT: string;
    PW: string;
    PY: string;
    QA: string;
    RO: string;
    RU: string;
    SA: string;
    SB: string;
    SC: string;
    SE: string;
    SG: string;
    SI: string;
    SK: string;
    SL: string;
    SN: string;
    SR: string;
    ST: string;
    SV: string;
    SZ: string;
    TC: string;
    TD: string;
    TH: string;
    TJ: string;
    TM: string;
    TN: string;
    TR: string;
    TT: string;
    TW: string;
    TZ: string;
    UA: string;
    UG: string;
    US: string;
    UY: string;
    UZ: string;
    VC: string;
    VE: string;
    VG: string;
    VN: string;
    YE: string;
    ZA: string;
    ZW: string;
};

export interface Keyword {
    id: number;
    name: string;
    popularity: number;
    matchType: string;
}

export interface FilteredKeyword {
    name: string;
    popularity: number;
}

export interface Response {
    data: Keyword[];
    status: string;
    requestId: string;
}
