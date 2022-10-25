import { collection, getDocs, query, where } from 'firebase/firestore';

import { db } from '../../../config/db';

export interface IGetUserProjects {
  userId: string;
  includes?: string[];
}

// function getIncludes(includes: IGetUserProjects['includes']){
// 	if(includes)
// }

export async function getUserProjects({ userId, includes }: IGetUserProjects) {
  try {
    console.log('Trying to getUserProjects with id: ', userId);
    const q = query(collection(db, 'projects'), where('ownerId', '==', userId));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, ' => ', doc.data());
    });
  } catch (error) {
    console.error('Failed ot get User Projects: ', error);
  }
}
