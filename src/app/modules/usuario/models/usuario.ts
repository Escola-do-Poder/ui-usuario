export interface Usuario {
  id: number;
  email: string;
  senha: string;
  nome: string;
  cpf: string;
  rg: string;
}

export type UsuarioSimplificado = Pick<Usuario, 'id' | 'nome'>;
