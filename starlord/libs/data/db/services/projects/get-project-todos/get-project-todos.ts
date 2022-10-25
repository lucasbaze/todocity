import { useState } from 'react';

import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';

import { TTodoItem } from '@todocity/data/types';

import { db } from '../../../config/db';

export interface IGetProjectTodos {
  projectId: string;
  includes?: string[];
}

// function getIncludes(includes: IGetUserProjects['includes']){
// 	if(includes)
// }

export async function useProjectTodos({
  projectId,
  includes,
}: IGetProjectTodos) {
  const [todos, setTodos] = useState([]);
  let unsubscribe = null;
  let error = null;

  try {
    console.log('Trying to getUserProjects with id: ', projectId);
    const projectRef = collection(doc(db, 'projects', projectId), 'todos');
    const q = query(projectRef);
    unsubscribe = onSnapshot(q, (qSnap) => {
      qSnap.forEach((doc) => {
        todos.push(doc.data());
      });
      // console.log('todos: ', todos);
    });
    return { unsubscribe, todos, error };
    // const querySnapshot = await getDocs(q);
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, ' => ', doc.data());
    // });
  } catch (err) {
    error = err;
    console.error('Failed ot get User Projects: ', err);
    return { unsubscribe, todos, error };
  }
}
