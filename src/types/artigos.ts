import { Media } from "./media";

export interface Artigo {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  titulo: string;
  resumo: string;
  autores: ArrayAutores[];
  fotos?: Media | null;
  linkPublicacao: string;
  tituloEN: string;
  resumoEN: string;
};

export interface ArrayAutores {
  id: number;
  nome: string;
}

export interface FetchArtigosResponse {
  data: Artigo[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}