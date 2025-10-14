"use client";

import { useParams } from "next/navigation";
import practiceAreas from "@/data/practice-areas/practiceareasextended";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function PracticeAreaPage() {
  const params = useParams();
  const slug = params?.slug as string; // Ensuring it's treated as a string
  
  const [practiceArea, setPracticeArea] = useState<typeof practiceAreas[0] | null>(null);

  useEffect(() => {
    if (slug) {
      const foundArea = practiceAreas.find((area) => area.id === slug);
      setPracticeArea(foundArea || null);
    }
  }, [slug]);

  if (!practiceArea) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600 text-xl">
        Practice Area Not Found
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 mt-12">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <div className="flex items-center gap-4 mb-6">
          {practiceArea.icon}
          <h1 className="text-3xl font-bold">{practiceArea.title}</h1>
        </div>

        <p className="text-lg text-gray-700 mb-6">{practiceArea.overview}</p>

        <h2 className="text-2xl font-semibold mb-4">Key Services</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
          {practiceArea.keyServices.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Case Studies</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          {practiceArea.caseStudies.map((caseStudy, index) => (
            <li key={index}>{caseStudy}</li>
          ))}
        </ul>
        <Button className="mt-8 p-3 w-full">Contact Us</Button>

      </div>
    </div>
  );
}
