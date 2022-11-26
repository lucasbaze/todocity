import { increment } from 'firebase/firestore';

import { CityModel } from '../../../models/city/city-model';
import { ProjectModel } from '../../../models/project/project-model';
import { TodoModel } from '../../../models/todo/todo-model';

export async function deleteTodo(
  userId: string,
  projectId: string,
  todoId: string
) {
  // Create new todo
  const todoModel = new TodoModel();
  await todoModel.destroyTodo(projectId, todoId);

  // Update project todos count
  const projectModel = new ProjectModel();
  await projectModel.updateProject(projectId, {
    incompleteTodosCount: increment(-1),
  });

  // Update city stats
  const cityModel = new CityModel();
  await cityModel.updateCity(userId, {
    'stats.createdTodos': increment(-1),
  });
}
