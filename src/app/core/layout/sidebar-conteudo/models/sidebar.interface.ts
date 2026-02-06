import { ZardIcon } from '@zard-ui/components/icon/icons';

export interface GrupoNavegacao {
  id: string;
  tituloGrupo?: string;
  itensNavegacao: ItemNavegacao[];
}

export interface ItemNavegacao {
  id: string;
  icone: ZardIcon;
  titulo: string;
  rota?: string;
  submenus?: SubmenuItemNavegacao[];
}

export type SubmenuItemNavegacao = Omit<ItemNavegacao, 'icone' | 'submenus'>;
