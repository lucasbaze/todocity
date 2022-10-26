export interface CSSPositionOffsets {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export type TUser = {
  displayName: string;
  email: string;
  phoneNumber: string;
  photoUrl: string;
  createdAt: string; // Date ISOString
  referralCode: string;
  referrals: string[]; // user strings
};

export type TLand = {
  size: [number, number];
  name: string;
  description: string;
  locked: boolean;
  cost: number;
};

export type TLandInformation = {
  lotId: string;
  land: TLand;
  projectId?: string;
  structureThumbnailUrl?: string;
};
export type TLibraryInformation = 'marketplace';

export type TMenu = {
  id: string;
  type: 'lot' | 'project' | 'library';
  cssPosition?: CSSPositionOffsets;
  content?: TLandInformation;
};

export type TStructure = {
  slug: string;
  type: string;
  src: string;
  thumbnailSrc: string;
  relativePosition: number[];
  projectId?: string;
  details?: {
    name?: string;
    description?: string;
    cost?: number;
    locked?: boolean;
  };
};

export type TLotPreview = {
  lotId: string;
  src: string;
};

export type TLot = {
  id: string;
  position: [x: number, y: number, z: number];
  rotation?: [x: number, y: number, z: number];
  land: TLand;
  structures: TStructure[];
  preview?: {
    src: string;
  };
};

export type TNewTodo = {
  title: string;
  description: string;
  projectId?: string;
  ownerId?: string;
};

export type TCriteria = {
  value: number;
  target: string; // TODO: Update to ENUM
  state: string; // TODO: Update to ENUM
};

export type TTodoItem = {
  id?: string;
  title: string;
  description?: string;
  completed?: boolean;
  ownerId?: string;
  projectId?: string;
  criteria?: TCriteria;
};

export type TProject = {
  id?: string;
  title: string;
  description: string;
  ownerId?: string;
  editorIds?: string[];
  todos: TTodoItem[];
};

export type TChallengeCriteria = {
  category: 'lot' | 'todo' | 'structure' | 'city-points';
  action: 'unlocked' | 'placed' | 'completed' | 'earned';
  value: number;
  comparitor: 'greater_than' | 'equal';
};

export type TChallengeReward = {
  category: 'city-points';
  value: number;
};

export type TChallenge = {
  id: string;
  name: string;
  criteria: TChallengeCriteria[];
  reward: TChallengeReward;
};

export type TPackage = {
  id: string;
  lotPoints: number;
  cityPoints: number;
};
