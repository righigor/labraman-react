import { FetchEquipesResponse } from "@/types/equipe";
import { FETCH_EQUIPES } from "@/utils/constants";

export const fetchEquipes = async (): Promise<FetchEquipesResponse> => {
  const response = await fetch(FETCH_EQUIPES);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
}