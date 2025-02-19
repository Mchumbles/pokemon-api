"use client";

import Link from "next/link";
import { PokemonCardProps } from "@/types/interfaces";

export default function PokeCard({ pokemon }: PokemonCardProps) {
  return (
    <li className="bg-gray-400 border-4 rounded-lg border-yellow-400 transition-transform duration-300 hover:scale-105">
      <Link href={`/pokemon/${pokemon.id}`} className="block text-center ">
        <p className="text-lg capitalize mt-2">
          #{pokemon.id} {pokemon.name}
        </p>
        <img
          src={pokemon.sprite}
          alt={pokemon.name}
          className="w-32 h-32 mx-auto"
        />
      </Link>
    </li>
  );
}
