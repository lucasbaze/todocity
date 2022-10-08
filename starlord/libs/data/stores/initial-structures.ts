export const structures = [
  {
    id: 'main-house',
    type: 'BUILDING',
    src: './static/models/main_house.glb',
    thumbnailSrc: './static/images/main-house.png',
    relativePosition: [0, 0, 0],
    // This is wrong as it's tightly coupling the project with the building
    projectId: 'my-first-project',
    details: {
      name: 'Main House',
      description: 'A simple modern house. Nothing special, but its yours.',
    },
  },
  {
    id: 'boring-house',
    type: 'BUILDING',
    src: './static/models/house_boring.glb',
    thumbnailSrc: './static/images/boring-house.png',
    relativePosition: [0, 0, 0],
    projectId: 'my-second-project',
    details: {
      name: 'Boring House',
      description:
        'A lack luster house, but gives you 1 extra lot point per hour.',
    },
  },
  {
    id: 'office-building',
    type: 'BUILDING',
    src: './static/models/office_building_4x12_trees.glb',
    thumbnailSrc: './static/images/office-building.png',
    relativePosition: [0, 0, 0],
    details: {
      name: 'Office Building',
      description: 'A building to work. Provides 1 extra city point per hour.',
    },
  },
  {
    id: 'retaurant-building',
    type: 'BUILDING',
    src: './static/models/office_building_4x12_trees.glb',
    thumbnailSrc: './static/images/office-building.png',
    relativePosition: [0, 0, 0],
    details: {
      name: 'Restuarant',
      description: 'A building to work. Provides 1 extra city point per hour.',
      cost: 10,
    },
  },
];
