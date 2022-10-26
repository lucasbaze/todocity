import { User as TFirebaseUser } from 'firebase/auth';
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import kebabCase from 'lodash/kebabCase';

import { TNewTodo, TTodoItem, TUser } from '@todocity/data/types';
import { getLocalStorage } from '@todocity/utils/global/get-local-storage';
import { generate } from '@todocity/utils/referral-codes/referral-codes';

import { db } from '../../config/db';

export interface ITodoModel {
  todo: Partial<TTodoItem>;
  createTodo(
    newTodo: TNewTodo,
    projectId: string,
    userId: string
  ): Promise<ITodoModel>;
}

export class TodoModel implements ITodoModel {
  todo: Partial<TTodoItem>;

  constructor() {
    this.todo = null;
  }

  createTodo = async (todo: TNewTodo, projectId: string, userId: string) => {
    try {
      const projectRef = doc(db, 'projects', projectId);
      const todoRef = await addDoc(collection(projectRef, 'todos'), {
        ...todo,
        projectId,
        ownerId: userId,
        completed: false,
      });

      this.todo = { ...todo, id: todoRef.id };
    } catch (error) {
      console.error('Failed to create new todo: ', error);
    }

    return this;
  };
}
