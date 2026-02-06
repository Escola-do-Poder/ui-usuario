import { GrupoNavegacao } from '../sidebar-conteudo/models/sidebar.interface';
import { generateId } from '@zard-ui/utils/merge-classes';

export const Navegacao: GrupoNavegacao[] = [
  {
    id: generateId('grupo-navegacao'),
    tituloGrupo: 'Atende+',
    itensNavegacao: [
      {
        id: generateId('item-navegacao'),
        icone: 'house',
        rota: '/',
        titulo: 'Home',
      },
      {
        id: generateId('item-navegacao'),
        icone: 'layout-dashboard',
        rota: '/dashboard',
        titulo: 'Dashboard',
      },
      {
        id: generateId('item-navegacao'),
        // icone: 'between-vertical-end',
        icone: 'align-vertical-justify-start',
        rota: '/filas',
        titulo: 'Filas',
      },
      {
        id: generateId('item-navegacao'),
        icone: 'airplay',
        rota: '/guiches',
        titulo: 'Guichês',
      },
      {
        id: generateId('item-navegacao'),
        icone: 'id-card-lanyard',
        rota: '/',
        titulo: 'Atendentes',
      },
      {
        id: generateId('item-navegacao'),
        icone: 'hand-platter',
        rota: '/',
        titulo: 'Atendimento',
      },
      {
        id: generateId('item-navegacao'),
        icone: 'tv-minimal',
        rota: '/',
        titulo: 'Painel TV',
      },
      {
        id: generateId('item-navegacao'),
        icone: 'book-user',
        rota: '/',
        titulo: 'Agendamentos',
      },
      {
        id: generateId('item-navegacao'),
        icone: 'chart-column',
        rota: '/',
        titulo: 'Relatórios',
      },
      {
        id: generateId('item-navegacao'),
        icone: 'users',
        rota: '/usuarios-perfis',
        titulo: 'Usuários e Perfis',
      },
      {
        id: generateId('item-navegacao'),
        icone: 'settings',
        rota: '/configuracoes',
        titulo: 'Configurações',
      },
    ],
  },
];
