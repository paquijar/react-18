"use client";
import { addTodo, Todo } from "@/services/services";
import { useRef, useState } from "react";

export const TodoList = ({ todos }: { todos: Todo[] }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState<string>();
  const [isPending, setIsPending] = useState(false);

  const addTodoNormal = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    const form = e.currentTarget;
    const name = form.todo.value;
    if (!name) {
      return;
    }
    formRef.current?.reset();
    const resposne = await addTodo(name);
    setIsPending(false);
    setError(resposne?.error);
  };

  return (
    <div>
      <form className="flex gap-4 mb-6" ref={formRef} onSubmit={addTodoNormal}>
        <input className="input input-bordered w-60" name="todo" />
        <button className="btn">Add todo</button>
      </form>
      <ul className="flex flex-col gap-4">
        {todos.map((todo) => (
          <li className="card bg-neutral-content px-4 py-8" key={todo.id}>
            {todo.name}
          </li>
        ))}
      </ul>
      {error && !isPending && (
        <div className="toast toast-bottom toast-end">
          <div className="alert alert-error">
            <span>{error}</span>
          </div>
        </div>
      )}
    </div>
  );
};
