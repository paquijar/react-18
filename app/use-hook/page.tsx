import { Card } from "@/components/Card";

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">use Hook</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        <Card id="1" />
        <Card id="2" />
        <Card id="3" />
        <Card id="4" />
      </div>
    </div>
  );
}
