export const structures = [
  {
    slug: 'main-house',
    type: 'BUILDING',
    src: './static/models/main_house.glb',
    thumbnailSrc: './static/images/main-house.png',
    relativePosition: [0, 0, 0],
    details: {
      name: 'Main House',
      description: 'A simple modern house. Nothing special, but its yours.',
      cost: 0,
      locked: false,
    },
  },
  {
    slug: 'boring-house',
    type: 'BUILDING',
    src: './static/models/house_boring.glb',
    thumbnailSrc: './static/images/boring-house.png',
    relativePosition: [0, 0, 0],
    projectId: 'my-second-project',
    details: {
      name: 'Boring House',
      description:
        'A lack luster house, but gives you 1 extra lot point per hour.',
      cost: 0,
      locked: false,
    },
  },
  {
    slug: 'office-building',
    type: 'BUILDING',
    src: './static/models/office_building_4x12_trees.glb',
    thumbnailSrc: './static/images/office-building.png',
    relativePosition: [0, 0, 0],
    details: {
      name: 'Office Building',
      description: 'A building to work. Provides 1 extra city point per hour.',
      cost: 0,
      locked: false,
    },
  },
  {
    slug: 'retaurant-building',
    type: 'BUILDING',
    src: './static/models/restaurant.glb',
    thumbnailSrc: './static/images/restaurant.png',
    relativePosition: [0, 0, 0],
    details: {
      name: 'Restuarant',
      description: 'Time to eat! Provides 2 extra city points per hour.',
      cost: 3,
      locked: true,
    },
  },
];
