import { User, UserCredential } from 'firebase/auth';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { LotModel } from 'libs/data/db/models/lot/lot-model';
import kebabCase from 'lodash/kebabCase';
import router from 'next/router';

import * as track from '@todocity/analytics/events/track';
import { initialDBLots } from '@todocity/stores/intial-lots';
import { getLocalStorage } from '@todocity/utils/global/get-local-storage';
import { generate } from '@todocity/utils/referral-codes/referral-codes';

import { db } from '../../config/db';
import { ProjectModel } from '../../models/project/project-model';
import { TodoModel } from '../../models/todo/todo-model';
import { UserModel } from '../../models/user/user-model';

async function addNewUserToFireStore(user: User) {
  const userModel = new UserModel();
  await userModel.createUser(user);

  const projectModel = new ProjectModel();
  await projectModel.createProject({
    ownerId: user.uid,
    title: 'My First Project',
    description: 'Projects are your real world todo lists',
  });

  const lotModel = new LotModel();
  await lotModel.createLots(
    userModel.user.id,
    initialDBLots(projectModel.project.id)
  );

  const todoModel = new TodoModel();
  await todoModel.createTodo(
    {
      title: 'Open this menu',
      description: 'Every todo completed is +10% portal power',
    },
    projectModel.project.id,
    userModel.user.id
  );
}

async function updateUserLastLoginDate(user: User) {
  const details = {
    lastLoginAt: new Date(),
  };
  try {
    const updatedDoc = await updateDoc(doc(db, 'users', user.uid), details);
    console.log('User Login last login updated: ', updatedDoc);
  } catch (e) {
    console.error('Error creating new user: ', e);
  }
}

export const signInSuccessWithAuthResult =
  (navigateTo: string = '/city', setLoading: () => void) =>
  (authResult: UserCredential) => {
    const userDocRef = doc(db, 'users', authResult.user.uid);
    getDoc(userDocRef)
      .then(async (doc) => {
        // TODO: (non-urgent) Push this stuff to some background job or task queue if possible
        if (doc.exists()) {
          track.login();
          updateUserLastLoginDate(authResult.user);
          router.push(navigateTo);
        } else {
          track.signup();
          await addNewUserToFireStore(authResult.user);
          router.push(navigateTo);
        }
      })
      .catch((error) => {
        console.error('Checking if user exists failed" ' + error);
      });

    // Because button disappears while document is being fetched and handled there is no loading indicator
    setLoading();
    // Required for loading to stay on same page. Do not remove
    return false;
  };
