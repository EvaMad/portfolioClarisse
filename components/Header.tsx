"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-stone-200/50 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 md:py-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold tracking-tight text-stone-900 hover:text-amber-700 transition-colors"
        >
          Arc<span className="text-amber-700">h</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 md:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-stone-600 hover:text-stone-900 font-light text-xs md:text-sm transition-colors duration-300 tracking-widest uppercase relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-stone-900 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} className="text-stone-900" /> : <Menu size={24} className="text-stone-900" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden border-t border-stone-200 px-4 md:px-6 py-3 space-y-2 bg-stone-50/50">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm md:text-base text-stone-700 hover:text-amber-700 font-light transition-colors tracking-widest uppercase py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
