export const SlowComponen2 = () => {
  console.log("SlowComponent 2 rendered");
  let i = 0;
  while (i < 1000000000) {
    i++;
  }
  return (
    <div className="card bg-primary text-primary-content py-8 px-4 mt-4">
      Another Slow Component Unoptimized
    </div>
  );
};
