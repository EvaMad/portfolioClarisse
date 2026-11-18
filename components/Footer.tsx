"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2024);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-stone-900 h-16 md:h-20 flex items-center justify-center px-4">
      <p className="text-stone-500 font-light text-xs md:text-sm tracking-widest text-center">
        &copy; {currentYear} Architecture Portfolio
      </p>
    </footer>
  );
}
