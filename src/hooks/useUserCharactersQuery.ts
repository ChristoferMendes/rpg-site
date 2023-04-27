import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";

export interface UserCharacters {
  characters: Character[];
}

export interface Character {
  id:         number;
  name:       string;
  race:       string;
  avatar_url: string;
  createdAt:  Date;
  updatedAt:  Date;
  user_id:    number;
}

const fetchCharacters = async (userId: number) => {
  const res = await api.get<UserCharacters>(`/users/${userId}/characters/`)
  return res.data;
}


export const useUserCharactersQuery = (userId: number) => {
  const { data, isLoading, error } = useQuery(['characters', userId], () => fetchCharacters(userId))


  return { data, isLoading, error }
}