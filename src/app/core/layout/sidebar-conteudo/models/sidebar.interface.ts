import type { IconName } from '@ng-icons/core';

export interface GrupoNavegacao {
  id: string;
  tituloGrupo?: string;
  itensNavegacao: ItemNavegacao[];
}

export interface ItemNavegacao {
  id: string;
  icone: IconName;
  titulo: string;
  rota?: string;
  submenus?: SubmenuItemNavegacao[];
}

export type SubmenuItemNavegacao = Omit<ItemNavegacao, 'icone' | 'submenus'>;
