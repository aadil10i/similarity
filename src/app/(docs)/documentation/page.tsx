import DocumentataionTabs from "@/components/DocumentationTabs";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Similarity API | Documentation",
  description: "Free and open-source text similarity API",
};

const page = () => {
  return (
    <div className="container max-w-7xl mx-auto mt-12">
      <div className="flex flex-col items-center gap-6">
        <LargeHeading>Making a Request</LargeHeading>
        <Paragraph>api/v1/similarity</Paragraph>
        <DocumentataionTabs />
      </div>
    </div>
  );
};

export default page;
