"use client";
import { useState } from "react";
import { updateName } from "@/services/updateName";

export default function UseActionState() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);
    const message = await updateName(name);
    setIsPending(false);
    setMessage(message);
    setName("");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">useActionState</h2>
      <form onSubmit={handleSubmit} className="flex gap-4 mb-4">
        <input
          className="input input-bordered w-60"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn" disabled={isPending}>
          Update
        </button>
      </form>
      {message && !isPending && <p>{message}</p>}
    </div>
  );
}
