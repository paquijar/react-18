"use client";
import { Helmet } from "react-helmet";

export default function MetadataReact18() {
  return (
    <div>
      <Helmet>
        <title>Document Metadata</title>
        <meta name="description" content="Document Metadata" />
      </Helmet>
      <h2 className="text-2xl font-bold mb-6">Document Metadata</h2>
    </div>
  );
}
