export const Button = ({
  children,
  pending,
}: {
  children: React.ReactNode;
  pending: boolean;
}) => {
  return (
    <button className="btn" disabled={pending}>
      {children}
    </button>
  );
};
