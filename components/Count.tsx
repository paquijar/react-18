import { useEffect } from "react";

export const Count = ({
  count,
  resetCount,
}: {
  count: number;
  resetCount: () => void;
}) => {
  useEffect(() => {
    resetCount();
  }, [resetCount]);

  return <div className="text-lg font-bold">The current count is {count}</div>;
};
