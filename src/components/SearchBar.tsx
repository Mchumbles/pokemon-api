"use client";

import { useState } from "react";
import { SearchBarProps } from "@/types/interfaces";

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  }

  return (
    <div className="my-4 flex justify-center">
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={query}
        onChange={handleChange}
        className="border border-gray-300 p-2 rounded-lg w-80"
      />
    </div>
  );
}
