import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import kebabCase from 'lodash/kebabCase';

import { projectTodosRef } from '@todocity/data/db';
import { TNewTodo, TTodoItem, TUser } from '@todocity/data/types';
import { getLocalStorage } from '@todocity/utils/global/get-local-storage';
import { generate } from '@todocity/utils/referral-codes/referral-codes';

import { db } from '../../config/db';

export interface ITodoModel {
  todo: Partial<TTodoItem>;
  createTodo(
    userId: string,
    projectId: string,
    newTodo: TNewTodo
  ): Promise<ITodoModel>;
  createTodos(
    userId: string,
    projectId: string,
    newTodo: TNewTodo[]
  ): Promise<ITodoModel>;
}

export class TodoModel implements ITodoModel {
  todo: Partial<TTodoItem>;

  constructor() {
    this.todo = null;
  }

  createTodo = async (userId: string, projectId: string, todo: TNewTodo) => {
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

  createTodos = async (
    userId: string,
    projectId: string,
    todos: TNewTodo[]
  ) => {
    try {
      const todoPromises = todos.map(async (todo) => {
        console.log('Attempting to create todo: ', userId, projectId, todo);
        return await addDoc(projectTodosRef(projectId), {
          ...todo,
          projectId,
          ownerId: userId,
          completed: false,
          createdAt: serverTimestamp(),
        });
      });
      const createdTodos = await Promise.all(todoPromises);
      console.log('Created todos: ', createdTodos);
    } catch (error) {
      console.error('Failed to create todos: ', userId, projectId, todos);
    }
    return this;
  };
}
