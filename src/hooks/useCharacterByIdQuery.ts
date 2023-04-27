import { useQuery } from "@tanstack/react-query"
import { api } from "../services/api"

export interface Character {
  id:         number;
  name:       string;
  race:       string;
  avatar_url: string;
  createdAt:  Date;
  updatedAt:  Date;
  user_id:    number;
  abilities:  Ability[];
}

export interface Ability {
  id:           number;
  name:         string;
  total:        number;
  bonus:        number;
  createdAt:    Date;
  updatedAt:    Date;
  character_id: number;
}



const fetchCharacterById = async (id: number | undefined) => {
  const response = await api.get<Character>(`/characters/${id}`)
  return response.data
}

export const useCharacterByIdQuery = (id?: number | undefined) => {
  const { data, isLoading } = useQuery(['character', id], () => fetchCharacterById(id))

  return { data, isLoading }
}