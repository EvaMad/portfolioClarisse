"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2024);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-stone-900 h-20 flex items-center justify-center">
      <p className="text-stone-500 font-light text-sm tracking-widest">
        &copy; {currentYear} Architecture Portfolio
      </p>
    </footer>
  );
}
