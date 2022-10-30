import { increment, serverTimestamp } from 'firebase/firestore';

import { CityModel } from '../../../models/city/city-model';
import { ProjectModel } from '../../../models/project/project-model';
import { TodoModel } from '../../../models/todo/todo-model';

export async function completeTodo(
  userId: string,
  projectId: string,
  todoId: string
) {
  // Update todo status
  const todoModel = new TodoModel();
  await todoModel.updateTodo(projectId, todoId, {
    completed: true,
    completedAt: serverTimestamp(),
  });

  // Drop project's incomplete todo's count by 1
  const projectModel = new ProjectModel();
  await projectModel.updateProject(projectId, {
    incompleteTodosCount: increment(-1),
  });

  // Update city stats and power level
  const cityModel = new CityModel();
  await cityModel.updateCity(userId, {
    powerLevel: +10,
    'stats.completedTodos': increment(1),
  });
}
