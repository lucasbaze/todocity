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

export type TLandInformation = Omit<TLand, 'size'>;
export type TLibraryInformation = 'marketplace';

export type TMenu = {
  id: string;
  type: 'lot' | 'project' | 'library';
  cssPosition?: CSSPositionOffsets;
  content?: TLandInformation;
};
