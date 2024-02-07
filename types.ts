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
    ae: string;
    ag: string;
    ai: string;
    al: string;
    am: string;
    ao: string;
    ar: string;
    at: string;
    au: string;
    az: string;
    bb: string;
    be: string;
    bf: string;
    bg: string;
    bh: string;
    bj: string;
    bm: string;
    bn: string;
    bo: string;
    br: string;
    bs: string;
    bt: string;
    bw: string;
    by: string;
    bz: string;
    ca: string;
    cg: string;
    ch: string;
    cl: string;
    cn: string;
    co: string;
    cr: string;
    cv: string;
    cy: string;
    cz: string;
    de: string;
    dk: string;
    dm: string;
    do: string;
    dz: string;
    ec: string;
    ee: string;
    eg: string;
    es: string;
    fi: string;
    fj: string;
    fm: string;
    fr: string;
    gb: string;
    gd: string;
    gh: string;
    gm: string;
    gr: string;
    gt: string;
    gw: string;
    gy: string;
    hk: string;
    hn: string;
    hr: string;
    hu: string;
    id: string;
    ie: string;
    il: string;
    in: string;
    is: string;
    it: string;
    jm: string;
    jo: string;
    jp: string;
    ke: string;
    kg: string;
    kh: string;
    kn: string;
    kr: string;
    kw: string;
    ky: string;
    kz: string;
    la: string;
    lb: string;
    lc: string;
    lk: string;
    lr: string;
    lt: string;
    lu: string;
    lv: string;
    md: string;
    mg: string;
    mk: string;
    ml: string;
    mn: string;
    mo: string;
    mr: string;
    ms: string;
    mt: string;
    mu: string;
    mw: string;
    mx: string;
    my: string;
    mz: string;
    na: string;
    ne: string;
    ng: string;
    ni: string;
    nl: string;
    np: string;
    no: string;
    nz: string;
    om: string;
    pa: string;
    pe: string;
    pg: string;
    ph: string;
    pk: string;
    pl: string;
    pt: string;
    pw: string;
    py: string;
    qa: string;
    ro: string;
    ru: string;
    sa: string;
    sb: string;
    sc: string;
    se: string;
    sg: string;
    si: string;
    sk: string;
    sl: string;
    sn: string;
    sr: string;
    st: string;
    sv: string;
    sz: string;
    tc: string;
    td: string;
    th: string;
    tj: string;
    tm: string;
    tn: string;
    tr: string;
    tt: string;
    tw: string;
    tz: string;
    ua: string;
    ug: string;
    us: string;
    uy: string;
    uz: string;
    vc: string;
    ve: string;
    vg: string;
    vn: string;
    ye: string;
    za: string;
    zw: string;
};
