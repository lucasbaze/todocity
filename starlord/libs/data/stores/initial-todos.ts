import { TNewTodo, TTodoItem } from '@todocity/data/types';

export const initialTodos = (
  ownerId: string,
  projectId: string
): TNewTodo[] => [
  {
    title: 'Open this menu',
    projectId,
    ownerId,
    description: 'Every todo completed is +10% portal power',
    visible: true,
    completed: false,
  },
  {
    title: 'Unlock a new lot',
    projectId,
    ownerId,
    description: 'Lots allow you to place new buildings',
    completed: false,
    visible: true,
    criteria: {
      value: 2,
      target: 'lot',
      state: 'unlocked',
    },
  },
  {
    title: 'Place a new building',
    projectId,
    ownerId,
    description: 'Each building can hold a new project',
    completed: false,
    visible: true,
    criteria: {
      value: 2,
      target: 'structure',
      state: 'placed',
    },
  },
  {
    title: 'Create a new todo',
    projectId,
    ownerId,
    description: 'Like "Cancel unused subscriptions"',
    completed: false,
    visible: true,
    criteria: {
      value: 1,
      target: 'todo',
      state: 'created',
    },
  },
  {
    title: 'Complete Demo',
    projectId,
    ownerId,
    description: 'Complete all other todos first!',
    completed: false,
    visible: true,
    criteria: {
      value: 4,
      target: 'todo',
      state: 'completed',
    },
  },
];
