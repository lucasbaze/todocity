export const initialLots = [
  {
    id: '1',
    position: [0, 0, 0] as [x: number, y: number, z: number],
    land: {
      size: [10, 10] as [number, number],
      name: 'Lot 420',
      description: 'You could have smelly neighbors',
      locked: true,
      cost: 24,
    },
    structures: [
      {
        id: 'structure-id',
        name: 'Boring House',
        type: 'BUILDING',
        src: './static/models/main_house.glb',
        thumbnailSrc: './static/images/main-house.png',
        relativePosition: [0, 0, 0],
        projectId: 'my-first-project',
      },
    ],
  },
  {
    id: '2',
    position: [10, 0, 0] as [x: number, y: number, z: number],
    land: {
      size: [8, 8] as [number, number],
      name: 'Lot 420',
      description: 'You could have smelly neighbors...',
      locked: true,
      cost: 3,
    },
    structures: [],
  },
  {
    id: '3',
    position: [-10, 0, 0] as [x: number, y: number, z: number],
    land: {
      size: [8, 8] as [number, number],
      name: 'Lot 314',
      description: 'A lot with several strange crop circles',
      locked: true,
      cost: 5,
    },
    structures: [],
  },
  {
    id: '4',
    position: [0, 0, 10] as [x: number, y: number, z: number],
    land: {
      size: [8, 8] as [number, number],
      name: 'Lot 662',
      description:
        "We're never quite certain of the size or the position of this lot",
      locked: true,
      cost: 10,
    },
    structures: [],
  },
  {
    id: '5',
    position: [0, 0, -10] as [x: number, y: number, z: number],
    land: {
      size: [8, 8] as [number, number],
      name: 'Lot 667',
      description: 'This lot has quite the attraction to the nearby folks',
      locked: false,
      cost: 15,
    },
    structures: [],
  },
];
