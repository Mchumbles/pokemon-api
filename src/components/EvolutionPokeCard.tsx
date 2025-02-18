"use client";

import Link from "next/link";
import { EvolutionDetails } from "@/types/interfaces";

interface EvolutionPokeCardProps {
  evolution: EvolutionDetails;
}

export default function EvolutionPokeCard({
  evolution,
}: EvolutionPokeCardProps) {
  return (
    <Link href={`/pokemon/${evolution.id}`}>
      <div className="bg-gray-300 border-4 border-yellow-400 rounded-lg p-4 text-center transition-transform duration-300 hover:scale-105 cursor-pointer">
        <p className="text-lg capitalize font-bold">
          #{evolution.id} {evolution.name}
        </p>
        <img
          src={evolution.sprite}
          alt={evolution.name}
          className="w-24 h-24 mx-auto"
        />
      </div>
    </Link>
  );
}
