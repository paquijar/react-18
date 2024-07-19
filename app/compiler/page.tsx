"use client";
import { Count } from "@/components/Count";
import { Counter } from "@/components/Counter";
import { SlowComponent } from "@/components/SlowComponent";
import { SlowComponen2 } from "@/components/SlowComponent2";
import { useCallback, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const resetCount = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">React Compiler</h2>
      <Counter count={count} setCount={setCount} />
      <SlowComponent />
      <Count count={count} resetCount={resetCount} />
      <SlowComponen2 />
    </div>
  );
}
