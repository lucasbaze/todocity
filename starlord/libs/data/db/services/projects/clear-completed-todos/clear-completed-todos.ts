import {
  collection,
  doc,
  getDocs,
  query,
  where,
  writeBatch,
} from 'firebase/firestore';

import { db } from '../../../config/db';

export async function clearCompletedTodos(projectId: string): Promise<void> {
  try {
    console.log(
      'Attempting to set visible to false on completed todos in project: ',
      projectId
    );
    const batch = writeBatch(db);
    const todosToHideSnap = await getDocs(
      query(
        collection(doc(db, 'projects', projectId), 'todos'),
        where('visible', '==', true),
        where('completed', '==', true)
      )
    );
    todosToHideSnap.forEach((snap) => {
      const todoRef = doc(db, `projects/${projectId}/todos`, snap.id);
      batch.update(todoRef, { visible: false });
    });
    await batch.commit();
    console.log('Set visible to false on todos in project: ', projectId);
  } catch (error) {
    console.error('Failed to clear compeleted Todos: ', projectId);
  }
}
