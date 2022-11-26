import {
  addDoc,
  deleteDoc,
  increment,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';

import { projectRef, projectTodoRef, projectTodosRef } from '@todocity/data/db';
import { TNewTodo, TTodoItem } from '@todocity/data/types';

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
  updateTodo(
    projectId: string,
    todoId: string,
    values: Record<string, unknown>
  ): Promise<ITodoModel>;
  destroyTodo(projectId: string, todoId: string): Promise<ITodoModel>;
}

export class TodoModel implements ITodoModel {
  todo: Partial<TTodoItem>;

  constructor() {
    this.todo = null;
  }

  createTodo = async (userId: string, projectId: string, todo: TNewTodo) => {
    try {
      const todoRef = await addDoc(projectTodosRef(projectId), {
        ...todo,
        projectId,
        ownerId: userId,
        completed: false,
        visible: true,
        createdAt: serverTimestamp(),
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
      await updateDoc(projectRef(projectId), {
        incompleteTodosCount: increment(todos.length),
      });
      console.log(
        'Added incomplete todos on project of count: ',
        projectId,
        todos?.length
      );
    } catch (error) {
      console.error('Failed to create todos: ', userId, projectId, todos);
    }
    return this;
  };

  updateTodo = async (
    projectId: string,
    todoId: string,
    values: Record<string, unknown>
  ) => {
    try {
      console.log('Attempting to update Todo: ', projectId, todoId, values);
      await updateDoc(projectTodoRef(projectId, todoId), values);
      console.log('Updated Todo: ', projectId, todoId, values);
      return this;
    } catch (error) {
      console.error('Failed to update todo: ', projectId, todoId);
    }
  };

  destroyTodo = async (projectId: string, todoId: string) => {
    try {
      console.log('Attempting to destroy Todo: ', projectId, todoId);
      await deleteDoc(projectTodoRef(projectId, todoId));
      console.log('destroy Todo: ', projectId, todoId);
      return this;
    } catch (error) {
      console.error('Failed to destroy todo', projectId, todoId);
    }
  };
}
