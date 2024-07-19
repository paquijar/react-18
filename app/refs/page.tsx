"use client";
import { Input } from "@/components/Input";
import { useRef } from "react";

export default function Refs() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Refs</h2>
      <div className="flex gap-8 items-center">
        <Input ref={inputRef} placeholder="Name" />
        <button className="btn" onClick={() => inputRef.current?.focus()}>
          Focus the input
        </button>
      </div>
    </div>
  );
}
