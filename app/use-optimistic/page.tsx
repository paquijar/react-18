import { TodoList } from "@/components/TodoList";

export default async function UseOptimistic() {
  const response = await fetch("http://localhost:8080/api/todos", {
    next: { tags: ["todos"] },
  });
  const todos = await response.json();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">useOptimistic Hook</h2>
      <TodoList todos={todos} />
    </div>
  );
}
