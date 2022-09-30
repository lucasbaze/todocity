import type { TProject } from '@todocity/data/types';

export const initialProjects: TProject[] = [
  {
    id: 'my-first-project',
    title: 'My First Project',
    description: 'This todo list is for your things',
    todos: [
      {
        id: '0',
        title: 'Open this menu',
        description: 'You are so good at this game!',
        completed: false,
      },
      {
        id: '1',
        title: 'Complete this todo!',
        description: 'Every todo completed is worth 2 lot points',
        completed: false,
      },
      {
        id: '2',
        title: 'Unlock a new lot',
        description: 'Click on one of the lots next to the house',
        completed: false,
      },
      {
        id: '3',
        title: 'Construct a new building',
        description: 'Place a building in the unlocked lot',
        completed: false,
      },
      {
        id: '4',
        title: 'Create a new todo',
        description: 'Literally anything. Go wild!',
        completed: false,
      },
    ],
  },
  {
    id: 'my-second-project',
    title: 'My second Project',
    description: 'You are getting good at this!',
    todos: [
      {
        id: '1',
        title: 'Finish Demo',
        description: 'You have learned much!',
        completed: false,
      },
    ],
  },
];
