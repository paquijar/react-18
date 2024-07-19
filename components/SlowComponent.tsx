import { memo } from "react";

export const SlowComponent = memo(() => {
  console.log("SlowComponent rendered");
  let i = 0;
  while (i < 1000000000) {
    i++;
  }
  return (
    <div className="card bg-neutral text-neutral-content py-8 px-4 mb-4">
      Slow Component
    </div>
  );
});

SlowComponent.displayName = "SlowComponent";
