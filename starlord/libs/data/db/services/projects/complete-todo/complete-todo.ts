import { increment, serverTimestamp } from 'firebase/firestore';
import { CityModel } from 'libs/data/db/models/city/city-model';
import { TodoModel } from 'libs/data/db/models/todo/todo-model';

export async function completeTodo(
  userId: string,
  projectId: string,
  todoId: string
) {
  // Create new project
  const todoModel = new TodoModel();
  await todoModel.updateTodo(projectId, todoId, {
    completed: true,
    completedAt: serverTimestamp(),
  });

  // Update city stats and power level
  const cityModel = new CityModel();
  await cityModel.updateCity(userId, {
    powerLevel: +10,
    'stats.completedTodos': increment(1),
  });
}
