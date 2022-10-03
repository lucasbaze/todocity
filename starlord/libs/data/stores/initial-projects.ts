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
        description: 'Every todo completed is worth 2 lot points',
        completed: false,
      },
      {
        id: '2',
        title: 'Unlock a new lot',
        description: 'Click on one of the lots next to the house',
        completed: false,
        criteria: {
          value: 2,
          target: 'lot',
          state: 'unlocked',
        },
      },
      {
        id: '3',
        title: 'Construct a new building',
        description: 'Place a building in the unlocked lot',
        completed: false,
        criteria: {
          value: 2,
          target: 'structure',
          state: 'placed',
        },
      },
      {
        id: '4',
        title: 'Create a new todo',
        description: 'Literally anything. Go wild!',
        completed: false,
        criteria: {
          value: 1,
          target: 'todo',
          state: 'created',
        },
      },
      {
        id: '5',
        title: 'Complete Demo',
        description: 'Complete all other todos first!',
        completed: false,
        criteria: {
          value: 5,
          target: 'todo',
          state: 'completed',
        },
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
