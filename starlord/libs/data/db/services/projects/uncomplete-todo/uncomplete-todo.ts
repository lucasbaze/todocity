import { increment } from 'firebase/firestore';

import { CityModel } from '../../../models/city/city-model';
import { ProjectModel } from '../../../models/project/project-model';
import { TodoModel } from '../../../models/todo/todo-model';

export async function uncompleteTodo(
  userId: string,
  projectId: string,
  todoId: string
) {
  // Create new project
  const todoModel = new TodoModel();
  await todoModel.updateTodo(projectId, todoId, {
    completed: false,
    completedAt: null,
  });

  // Drop project's incomplete todo's count by 1
  const projectModel = new ProjectModel();
  await projectModel.updateProject(projectId, {
    incompleteTodosCount: increment(1),
  });

  // Update city stats
  const cityModel = new CityModel();
  await cityModel.updateCity(userId, {
    powerLevel: -10,
    'stats.completedTodos': increment(-1),
  });
}
