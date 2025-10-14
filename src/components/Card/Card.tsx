"use client";
import React, { useEffect, useState } from "react";
import { JSX } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import practiceAreas from "@/data/practice-areas/practiceareasextended";

interface CardProps {
  id: string; // Changed from number to string
  title: string;
  icon: JSX.Element;
  description: string;
}

const Card: React.FC<CardProps> = ({ id, title, icon, description }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    console.log("state changed");
  }, [open]);
  const selectedArea = practiceAreas.find((area) => area.id === id);

  return (
    <div className="p-6 hover:-translate-y-2 transition-all duration-200 shadow-lg rounded-lg text-center bg-white flex flex-col items-center space-y-4">
      {icon}
      <h3 className="text-xl font-bold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button onClick={() => setOpen(true)}>Learn More</Button>
        </SheetTrigger>

        <SheetContent className=" overflow-y-auto">
          <SheetHeader>
            <SheetTitle>{title}</SheetTitle>
          </SheetHeader>

          {selectedArea && (
            <div className="py-4 space-y-4">
              <p className="text-gray-700">{selectedArea.overview}</p>
              <div>
                <h4 className="font-semibold mt-4">Key Services:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {selectedArea.keyServices.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
              {selectedArea.caseStudies && (
                <div>
                  <h4 className="font-semibold mt-4">Case Studies:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {selectedArea.caseStudies.map((caseStudy, index) => (
                      <li key={index}>{caseStudy}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          <SheetClose asChild>
            <div>
              <Button className="mt-4 w-full">Close</Button>
            </div>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export { Card };
