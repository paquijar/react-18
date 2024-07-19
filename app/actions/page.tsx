"use client";
import { useState } from "react";
import { updateName } from "@/services/updateName";

export default function Actions() {
  const [name, setName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateName(name);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Actions</h2>
      <form onSubmit={handleSubmit} className="flex gap-4">
        <input
          className="input input-bordered w-60"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn">Update</button>
      </form>
    </div>
  );
}
