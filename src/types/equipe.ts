/* eslint-disable @typescript-eslint/no-explicit-any */
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
  email?: string[];
  lattes?: string;
  orcid?: string;
};

export interface Media {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: { thumbnail: MediaFormat; small: MediaFormat; medium: MediaFormat; large: MediaFormat; };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MediaFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path: string;
  url: string;
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