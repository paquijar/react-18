export const Counter = ({
  count,
  setCount,
}: {
  count: number;
  setCount: (count: number) => void;
}) => {
  return (
    <div className="join mb-6">
      <button
        className="btn btn-neutral join-item"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <div className="flex w-12 h-12 items-center join-item justify-center">
        {count}
      </div>
      <button
        className="btn btn-neutral join-item"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
};
