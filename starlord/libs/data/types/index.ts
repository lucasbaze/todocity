export interface CSSPositionOffsets {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export type TLand = {
  size: [number, number];
  name: string;
  description: string;
  locked: boolean;
  cost: number;
};

export type TLandInformation = Omit<TLand, 'size'> & { lotId: string };
export type TLibraryInformation = 'marketplace';

export type TMenu = {
  id: string;
  type: 'lot' | 'project' | 'library';
  cssPosition?: CSSPositionOffsets;
  content?: TLandInformation;
};

export type TStructure = {
  id: string;
  name: string;
  type: string;
  src: string;
  relativePosition: number[];
  projectListId: string;
};

export type TLot = {
  id: string;
  position: [x: number, y: number, z: number];
  land: TLand;
  structures: TStructure[];
};
