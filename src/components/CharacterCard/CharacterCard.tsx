import React from "react";
import { VStack } from "../VStack";
import { HStack } from "../HStack";
import { Link } from "react-router-dom";

function CharacterCard({ name, race, idToGoToPage }: { name: string, race: string, idToGoToPage: number }) {
  return (
    <Link to={`/character/${idToGoToPage}`}>
      <VStack>
        <HStack className="m-3 space-x-5 bg-purple-950">
          <img
            src="https://cdn.discordapp.com/attachments/1083808275436408885/1098615137109282937/Artie_Cahill_pop_colors_anime_art_of_an_half_elf_drunk_samurai__7d47e364-ceca-444e-b703-5adb06745804.png"
            alt=""
            className="w-24"
          />
          <VStack>
            <p className="font-bold text-3xl">{name}</p>
            <p className="font-medium text-zinc-400">{race}</p>
          </VStack>
        </HStack>
      </VStack>
    </Link>
  );
}

export default CharacterCard;
