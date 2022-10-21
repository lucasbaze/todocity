import { collection, QueryDocumentSnapshot } from 'firebase/firestore';

import { TProject, TUser } from '@todocity/data/types';

import { db as _db } from '../config/db';

const converter = <T>() => ({
  toFirestore: (data: T) => data,
  fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as T,
});

const dataPoint = <T>(collectionPath: string) =>
  collection(_db, collectionPath).withConverter(converter<T>());

export const db = {
  users: dataPoint<TUser>('users'),
  userProjects: (userId: string) => dataPoint<TProject>(`projects`),
};
