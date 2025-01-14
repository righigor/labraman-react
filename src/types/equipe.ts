export type Equipe = {
  nome: string;
  tituloCargo?: string;
  email: string[];
  bio?: string;
  photo?: string;
  lattes?: string;
  orcid?: string;
  pesquisaAtual?: string;
  telefone?: string;
  areaAtuacao?: string;
  cargo: "professor" | "professor_convidado" | "estudante";
  nivelEstudo?: "graduação" | "mestrado" | "doutorado";
};
