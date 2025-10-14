"use client";
import Link from "next/link";
import { Scale, Menu, X } from "lucide-react"; // Import Menu and X icons
import { Button } from "@/components/ui/button";
import DropdownMenuRadioGroupDemo from "../AreasSelect/AreasSelect";
import Text from "../Text/Text";
import { useState } from "react"; // State for mobile menu toggle

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="header bg-transparent backdrop-blur-lg shadow-md  fixed top-0 w-screen z-50">
        <nav className="flex justify-between gap-2 p-2 px-5 items-center">
          {/* Logo Section */}
          <div className="flex space-x-2 items-center justify-center">
            <Link href="/">
              <div className="flex items-center space-x-2 cursor-pointer">
                <Scale size={46} className="text-green-700" />
                <p className="font-bold text-3xl text-black">JusticeLaw</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-around space-x-6">
            <DropdownMenuRadioGroupDemo />
            <Link href="/attorney">
              <Text>Attorneys</Text>
            </Link>
            <Link href="/blogs">
              <Text>Blogs</Text>
            </Link>

            <div className="hidden md:flex justify-center items-center">
              <Link href="/get-in-touch">
                <Button size={"sm"}>Get in touch</Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle and Close Button */}
          <div className="md:hidden flex justify-end">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X color="black" size={32} /> // Show X icon when menu is open
              ) : (
                <Menu color="black" size={32} /> // Show Menu icon when menu is closed
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="flex  flex-col space-y-4 p-4 bg-transparent backdrop-blur-md shadow-md">
              <div className="text-start">
                {" "}
                <DropdownMenuRadioGroupDemo />
              </div>{" "}
              <Link href="/attorney">
                <Text>Attorneys</Text>
              </Link>
              <Link href="/blogs">
                <Text>Blogs</Text>
              </Link>
              <Link href="/contact">
                <Text>Contact Us</Text>
              </Link>
              <div className="flex space-x-4">
                <Link href="/get-in-touch" className="w-full">
                  <Button className="w-full">Get In Touch</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
