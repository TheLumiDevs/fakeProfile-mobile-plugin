export interface Badge {
    asset: string;
    description: string;
    icon: string;
    link?: string;
}

export interface DecorationData {
    asset: string;
    skuId: string;
    animated: boolean;
}
export interface AvatarDecoration {
    asset: string;
    skuId: string;
    animated: boolean;
}

export interface UserProfileData {
    profile_effect: string;
    banner: string;
    avatar: string;
    badges: Badge[];
    decoration: DecorationData;
}

export interface Colors {
    primary: number;
    accent: number;
}

export interface fakeProfileSectionProps {
    hideTitle?: boolean;
    hideDivider?: boolean;
    noMargin?: boolean;
}
export interface UserProfile {
    application: null; // TEMP
    accentColor: number | null;
    applicationRoleConnections: []; // TEMP
    badges: {
        description: string;
        icon: string;
        id: string;
        link?: string;
    }[];
    banner: string | null | undefined;
    bio: string;
    connectedAccounts: {
        id: string;
        metadata?: Record<string, any>;
        name: string;
        type: string;
        verified: boolean;
    }[];
    lastFetched: number;
    legacyUsername: string | null;
    premiumGuildSince: Date | null;
    premiumSince: Date | null;
    premiumType: number | null | undefined;
    profileEffectId?: string | undefined;
    profileEffectID?: string | undefined;
    profileFetchFailed: boolean;
    pronouns: string;
    themeColors?: [primaryColor: number, accentColor: number] | undefined;
    userId: string;
}

export interface BadgeProps {
    name: string;
    image: string;
    custom?: any;
  }
  
export interface BadgeComponents {
name: string;
image: string;
size: number;
margin: number;
custom?: object;
}

export interface CustomBadges {
    icon: string;
    description: string;
}

export interface FakeProfileData {
    plugin?: string;
    version?: string;
    reloadInterval?: number;
}


export interface ProfileEffectConfig {
    type: number;
    id: string;
    sku_id: string;
    title: string;
    description: string;
    accessibilityLabel: string;
    animationType: number;
    thumbnailPreviewSrc: string;
    reducedMotionSrc: string;
    effects: Array<EffectConfig>;
}

export interface EffectConfig {
    src: string;
    loop: boolean;
    height: number;
    width: number;
    duration: number;
    start: number;
    loopDelay: number;
    position: {
        x: number;
        y: number;
    };
    zIndex: number;
}
