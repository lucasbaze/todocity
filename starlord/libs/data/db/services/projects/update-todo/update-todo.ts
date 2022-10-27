import { TodoModel } from 'libs/data/db/models/todo/todo-model';

export async function updateTodo(
  projectId: string,
  todoId: string,
  values: Record<string, unknown>
) {
  // Create new project
  const todoModel = new TodoModel();
  await todoModel.updateTodo(projectId, todoId, values);
}
