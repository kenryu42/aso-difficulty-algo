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
    title: string;
    subtitle: string;
    rating: number;
    ratingCount: number;
}