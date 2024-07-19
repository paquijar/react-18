import Link from "next/link";

const menuItems = [
  { name: "Refs", path: "/refs" },
  { name: "Document Metadata", path: "/metadata" },
  { name: "Actions", path: "/actions" },
  { name: "useActionState Hook", path: "/use-action-state" },
  { name: "useFormStatus Hook", path: "/use-form-status" },
  { name: "useOptimistic Hook", path: "/use-optimistic" },
  { name: "use Hook", path: "/use-hook" },
  { name: "React Compiler", path: "/compiler" },
];

export const Menu = () => {
  return (
    <nav>
      <ul className="menu">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
