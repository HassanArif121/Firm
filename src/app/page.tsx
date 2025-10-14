"use client";
import Hero from "@/components/Hero/Hero";
import PracticeAreas from "@/app/practiceareas/page"; // Ensure the correct path
import AboutUs from "@/app/about-us/page"; // Ensure the correct path
import { useState, useEffect } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Update mouse position on move
  useEffect(() => {

    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Floating Background Effect */}
      <div
        className="fixed top-0 left-0 w-96 h-96 bg-emerald-600 rounded-full filter blur-3xl opacity-20 transition-transform duration-300"
        style={{
          transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
        }}
      />
         <div
          className="fixed top-96 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20 transition-transform duration-300"
          style={{
            transform: `translate(${-mousePosition.x * 0.1}px, ${
              -mousePosition.y * 0.1
            }px)`,
          }}
        />
      {/* Page Sections */}
      <div>
        <Hero />
        <PracticeAreas />
        <AboutUs />
      </div>
    </>
  );
}
