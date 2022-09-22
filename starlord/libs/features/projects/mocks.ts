import { faker } from '@todocity/utils/faker';

import type { TTodoItem } from './types';
faker.seed(69);

export const createMockTodoItem = (overrides?: TTodoItem) => ({
  id: faker.datatype.uuid(),
  title: faker.random.words(5),
  description: faker.random.words(20),
  ...overrides,
});
