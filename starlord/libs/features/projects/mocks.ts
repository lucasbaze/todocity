import type { TTodoItem } from '@todocity/data/types';
import { faker } from '@todocity/utils/faker';
faker.seed(69);

export const createMockTodoItem = (overrides?: TTodoItem) => ({
  id: faker.datatype.uuid(),
  title: faker.random.words(5),
  description: faker.random.words(20),
  ...overrides,
});
