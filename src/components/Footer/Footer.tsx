"use client";
import Link from "next/link"; // Import Next.js Link
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        
        {/* Column 1: About */}
        <div>
          <h2 className="text-2xl font-bold">Our Law Firm</h2>
          <p className="mt-3 text-gray-400">
            Dedicated to providing expert legal solutions with integrity and excellence.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h2 className="text-2xl font-bold">Quick Links</h2>
          <ul className="mt-3 space-y-2">
            <li><Link href="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
            <li><Link href="/services" className="text-gray-400 hover:text-white transition">Services</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            <li><Link href="/attorneys" className="text-gray-400 hover:text-white transition">Our Attorneys</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p className="mt-3 flex items-center text-gray-400"><FaPhone className="mr-2" /> +1 (234) 567-890</p>
          <p className="mt-2 flex items-center text-gray-400"><FaEnvelope className="mr-2" /> contact@lawfirm.com</p>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition"><FaFacebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition"><FaTwitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition"><FaLinkedin size={20} /></a>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Our Law Firm. All Rights Reserved.
      </div>
    </footer>
  );
}
