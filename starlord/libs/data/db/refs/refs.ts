import {
  collection,
  doc,
  DocumentData,
  PartialWithFieldValue,
  query,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from 'firebase/firestore';

import type { TLot, TTodoItem } from '@todocity/data/types';

import { db } from '../config/db';

// https://github.com/invertase/react-query-firebase/issues/38#issuecomment-1053985222
export const firestoreConverter = <T extends Record<string, unknown>>() => ({
  toFirestore({ id, ...data }: PartialWithFieldValue<T>): DocumentData {
    return data;
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot<T>,
    options: SnapshotOptions
  ): T {
    const data = snapshot.data(options);
    return {
      id: snapshot.id,
      ...data,
    };
  },
});

// Refs
// User
export const userRef = (userId: string) => doc(db, 'users', userId);

// Projects
export const projectRef = (projectId: string) => doc(db, 'projects', projectId);
export const projectTodosRef = (projectId: string) =>
  collection(doc(db, 'projects', projectId), 'todos').withConverter(
    firestoreConverter<TTodoItem>()
  );
export const projectTodoRef = (projectId: string, todoId: string) =>
  doc(db, `projects/${projectId}/todos`, todoId);

// Lots
export const lotsRef = (userId: string) =>
  query(collection(doc(db, 'users', userId), 'lots')).withConverter(
    firestoreConverter<TLot>()
  );
export const lotRef = (userId: string, lotId: string) =>
  doc(collection(doc(db, 'users', userId), 'lots'), lotId);

// Structures
export const structureRef = (userId: string, structureId: string) =>
  doc(db, `users/${userId}/structures`, structureId);
export const structuresRef = (userId: string) =>
  collection(doc(db, 'users', userId), 'structures');
