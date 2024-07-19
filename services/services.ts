"use server";
import { Card } from "@/components/Card";
import { revalidateTag } from "next/cache";

export interface Todo {
  id: string;
  name: string;
  error?: string;
}

export const addTodo = async (name: string): Promise<Todo> => {
  try {
    const response = await fetch("http://localhost:8080/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });

    revalidateTag("todos");
    return response.json();
  } catch (e) {
    throw new Error("Failed to add todo");
  }
};

export const getCardById = async (id: string): Promise<Card> => {
  const response = await fetch(`http://localhost:8080/api/cards/${id}`);
  return response.json();
};
