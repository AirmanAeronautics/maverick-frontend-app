export type ChannelAvatarKey =
  | 'avatar1'
  | 'avatar2'
  | 'avatar3'
  | 'avatar4'
  | 'avatar5'
  | 'avatar6'
  | 'avatar7'
  | 'avatar8';

export type ChannelCategoryId = 'popular' | 'dgca';

export type ChannelDefinition = {
  id: string;
  name: string;
  avatarKey: ChannelAvatarKey;
};

export type ChannelCategory = {
  id: ChannelCategoryId;
  title: string;
  channels: ChannelDefinition[];
};

export const CHANNEL_PREVIEW_COUNT = 4;

const POPULAR_CHANNELS: ChannelDefinition[] = [
  { id: 'popular-jetstream', name: 'Jetstream', avatarKey: 'avatar1' },
  { id: 'popular-cloudline', name: 'Cloudline', avatarKey: 'avatar2' },
  { id: 'popular-vector', name: 'Vector', avatarKey: 'avatar3' },
  { id: 'popular-aerokid', name: 'AeroKid', avatarKey: 'avatar4' },
  { id: 'popular-skydeck', name: 'SkyDeck Live', avatarKey: 'avatar5' },
  { id: 'popular-towersync', name: 'TowerSync', avatarKey: 'avatar6' },
  { id: 'popular-cabinverse', name: 'CabinVerse', avatarKey: 'avatar7' },
  { id: 'popular-approach', name: 'Approach Brief', avatarKey: 'avatar8' },
];

const DGCA_CHANNELS: ChannelDefinition[] = [
  { id: 'dgca-air-safety', name: 'DGCA Air Safety', avatarKey: 'avatar5' },
  { id: 'dgca-regulations', name: 'Regulations Live', avatarKey: 'avatar6' },
  { id: 'dgca-ops-center', name: 'DGCA Ops Center', avatarKey: 'avatar7' },
  { id: 'dgca-compliance', name: 'Compliance Brief', avatarKey: 'avatar8' },
  { id: 'dgca-safety-directives', name: 'Safety Directives', avatarKey: 'avatar1' },
  { id: 'dgca-licensing', name: 'Licensing Alerts', avatarKey: 'avatar2' },
  { id: 'dgca-airworthiness', name: 'Airworthiness Hub', avatarKey: 'avatar3' },
  { id: 'dgca-oversight', name: 'Oversight Watch', avatarKey: 'avatar4' },
];

export const CHANNEL_CATEGORIES: ChannelCategory[] = [
  { id: 'popular', title: 'Popular channels', channels: POPULAR_CHANNELS },
  { id: 'dgca', title: 'DGCA channels', channels: DGCA_CHANNELS },
];

export const CHANNEL_CATEGORY_MAP: Record<ChannelCategoryId, ChannelCategory> = CHANNEL_CATEGORIES.reduce(
  (acc, category) => {
    acc[category.id] = category;
    return acc;
  },
  {} as Record<ChannelCategoryId, ChannelCategory>,
);

export const FOLLOWERS_LABEL = '100K followers';






