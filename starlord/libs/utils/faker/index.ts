// eslint-disable-next-line no-restricted-imports
import { faker as Faker } from '@faker-js/faker';
export const faker = {
  ...Faker,
  seed: Faker.seed,
  /**
   *
   * @param id specify an id from https://picsum.photos/images
   * @returns string from picsum.photos
   */
  image: (width = 100, height = 100, id = 1027) => {
    return `https://picsum.photos/id/${id}/${width}/${height}`;
  },
};
