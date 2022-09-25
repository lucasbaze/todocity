export const structures = [
  {
    id: 'main-house',
    name: 'Main House',
    type: 'BUILDING',
    src: './static/models/main_house.glb',
    relativePosition: [0, 0, 0],
    // This is wrong as it's tightly coupling the project with the building
    projectId: 'my-first-project',
  },
  {
    id: 'boring-house',
    name: 'Boring House',
    type: 'BUILDING',
    src: './static/models/house_boring.glb',
    relativePosition: [0, 0, 0],
    projectId: 'my-second-project',
  },
  {
    id: 'office-building',
    name: 'Office Building',
    type: 'BUILDING',
    src: './static/models/office_building_4x12_trees.glb',
    relativePosition: [0, 0, 0],
    projectId: 'my-third-project',
  },
];
