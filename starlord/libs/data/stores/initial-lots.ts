import type { TLot } from '@todocity/data/types';

export const initialLots = (initialProjectId: string): Omit<TLot, 'id'>[] => {
  return [
    {
      position: [-7, 0, 5] as [x: number, y: number, z: number],
      rotation: [0, 0, 0] as [x: number, y: number, z: number],
      land: {
        size: [10, 10] as [number, number],
        name: 'Lot 1',
        description: 'Your first city structure',
        locked: true,
        cost: 24,
      },
      structures: [
        {
          slug: 'structure-id',
          type: 'BUILDING',
          src: './static/models/main_house.glb',
          thumbnailSrc: './static/images/main-house.png',
          relativePosition: [0, 0, 0],
          projectId: initialProjectId,
          details: {
            name: 'Main House',
          },
        },
      ],
    },
    {
      position: [-6, 0, -5] as [x: number, y: number, z: number],
      rotation: [0, 0, 0] as [x: number, y: number, z: number],
      land: {
        size: [8, 8] as [number, number],
        name: 'Lot 314',
        description: 'A lot with several strange crop circles',
        locked: true,
        cost: 4,
      },
      structures: [],
    },
    {
      position: [5.5, 0, -5.5] as [x: number, y: number, z: number],
      rotation: [0, -Math.PI / 6, 0] as [x: number, y: number, z: number],
      land: {
        size: [10, 8] as [number, number],
        name: 'Lot 420',
        description: 'You could have smelly neighbors...',
        locked: true,
        cost: 24,
      },
      structures: [],
    },
    {
      position: [4.5, 0, 8] as [x: number, y: number, z: number],
      rotation: [0, -Math.PI / 6, 0] as [x: number, y: number, z: number],
      land: {
        size: [8, 8] as [number, number],
        name: 'Lot 662',
        description:
          "We're never quite certain of the size or the position of this lot",
        locked: true,
        cost: 8,
      },
      structures: [],
    },
  ];
};
