import type { TProject } from '@todocity/data/types';

export const initialProjects: TProject[] = [
  {
    id: 'my-first-project',
    title: 'My First Project',
    description: 'Projects are your real world todo lists',
    todos: [
      {
        id: '0',
        title: 'Open this menu',
        description: 'Every todo completed is +10% portal power',
        completed: false,
      },
      {
        id: '2',
        title: 'Unlock a new lot',
        description: 'Lots allow you to place new buildings',
        completed: false,
        criteria: {
          value: 2,
          target: 'lot',
          state: 'unlocked',
        },
      },
      {
        id: '3',
        title: 'Place a new building',
        description: 'Each building can hold a new project',
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
        description: 'Like "Cancel unused subscriptions"',
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
          value: 4,
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
