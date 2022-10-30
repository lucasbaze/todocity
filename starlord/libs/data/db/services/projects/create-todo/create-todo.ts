import { increment } from 'firebase/firestore';

import { TNewTodo } from '@todocity/data/types';

import { CityModel } from '../../../models/city/city-model';
import { ProjectModel } from '../../../models/project/project-model';
import { TodoModel } from '../../../models/todo/todo-model';

export async function createTodo(
  userId: string,
  projectId: string,
  newTodo: TNewTodo
) {
  // Create new todo
  const todoModel = new TodoModel();
  await todoModel.createTodo(userId, projectId, {
    ...newTodo,
  });

  // Update project todos count
  const projectModel = new ProjectModel();
  await projectModel.updateProject(projectId, {
    incompleteTodosCount: increment(1),
  });

  // Update city stats
  const cityModel = new CityModel();
  await cityModel.updateCity(userId, {
    'stats.createdTodos': increment(1),
  });
}
