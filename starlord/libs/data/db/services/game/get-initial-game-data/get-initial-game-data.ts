import { useEffect, useState } from 'react';

import { collection, doc, getDocs, query, where } from 'firebase/firestore';

import { db } from '../../../../db/config/db';

async function getInitialGameData(userId: string) {
  const lots = [];
  const projects = [];

  // Get Lots
  const userLotsQueryRef = query(collection(doc(db, 'users', userId), 'lots'));
  const lotQuerySnap = await getDocs(userLotsQueryRef);

  lotQuerySnap.forEach((lotSnap) => {
    lots.push({ id: lotSnap.id, ...lotSnap.data() });
  });

  // Get Projects
  const userProjectsQueryRef = query(
    collection(db, 'projects'),
    where('ownerId', '==', userId)
  );
  const projectQuerySnap = await getDocs(userProjectsQueryRef);

  projectQuerySnap.forEach(async (projectDoc) => {
    const projectData = { id: projectDoc.id, todos: [], ...projectDoc.data() };
    const projectTodosQueryRef = query(
      collection(doc(db, 'projects', projectDoc.id), 'todos')
    );
    const projectTodosQuerySnap = await getDocs(projectTodosQueryRef);

    const todos = [];
    projectTodosQuerySnap.forEach((todoDoc) =>
      todos.push({ id: todoDoc.id, ...todoDoc.data() })
    );

    projectData.todos = [...todos];
    projects.push(projectData);
  });

  return { lots, projects };
}

export function useInitialGameData(userId: string) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchInitialGameData() {
      const gameData = await getInitialGameData(userId);
      setData(gameData);
      setLoading(false);
    }
    fetchInitialGameData();
  }, []);

  return { loading, data, error };
}
