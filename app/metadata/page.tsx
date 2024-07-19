import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Document Metadata",
  description: "Document Metadata",
};

export default function MetadataNextJs() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Document Metadata</h2>
    </div>
  );
}
