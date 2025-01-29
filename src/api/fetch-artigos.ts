import { FetchArtigosResponse } from "@/types/artigos";
import { FETCH_ARTIGOS } from "@/utils/constants";

export const fetchArtigos = async (): Promise<FetchArtigosResponse> => {
  const response = await fetch(FETCH_ARTIGOS);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
}