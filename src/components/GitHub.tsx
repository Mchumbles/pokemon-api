"use client";

import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";

function GitHub() {
  const [iconSize, setIconSize] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateIconSize = () => {
        setIconSize(window.innerWidth < 640 ? 25 : 45);
      };

      updateIconSize();
      window.addEventListener("resize", updateIconSize);

      return () => {
        window.removeEventListener("resize", updateIconSize);
      };
    }
  }, []);

  if (iconSize === null) return null;

  return (
    <button className="absolute top-6 right-6">
      <a
        href="https://github.com/Mchumbles"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black transition-colors duration-300 relative"
      >
        <FaGithub size={iconSize} className="hover:text-white" />
      </a>
    </button>
  );
}

export default GitHub;
