import { Media } from "./media";

export interface Equipe {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  nome: string;
  tituloCargo: string;
  tituloCargoEN: string;
  bio: string;
  bioEN?: string;
  photo?: Media | null;
  areaAtuacao?: string;
  areaAtuacaoEN: string;
  telefone?: string;
  cargo: "professor" | "professor_convidado" | "estudante";
  nivelEstudo?: "graduação" | "mestrado" | "doutorado";
  email?: Email[];
  lattes?: string;
  orcid?: string;
};

export interface Email {
  id: number;
  email: string;
}

export interface FetchEquipesResponse {
  data: Equipe[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}