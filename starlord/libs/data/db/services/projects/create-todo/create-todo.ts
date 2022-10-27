import { increment } from 'firebase/firestore';
import { CityModel } from 'libs/data/db/models/city/city-model';
import { TodoModel } from 'libs/data/db/models/todo/todo-model';

import { TNewTodo } from '@todocity/data/types';

export async function createTodo(
  userId: string,
  projectId: string,
  newTodo: TNewTodo
) {
  // Create new project
  const todoModel = new TodoModel();
  await todoModel.createTodo(userId, projectId, {
    ...newTodo,
  });

  // Update city stats
  const cityModel = new CityModel();
  await cityModel.updateCity(userId, {
    'stats.createdTodos': increment(1),
  });
}
