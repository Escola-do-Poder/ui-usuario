import { GrupoNavegacao } from '../sidebar-conteudo/models/sidebar.interface';
import { generateId } from '@zard-ui/utils/merge-classes';

export const Navegacao: GrupoNavegacao[] = [
  {
    id: generateId('grupo-navegacao'),
    tituloGrupo: 'Atende+',
    itensNavegacao: [
      {
        id: generateId('item-navegacao'),
        icone: 'lucideHouse',
        rota: '/',
        titulo: 'Home',
      },
      {
        id: generateId('item-navegacao'),
        icone: 'lucideLayoutDashboard',
        rota: '/dashboard',
        titulo: 'Dashboard',
      },
      {
        id: generateId('item-navegacao'),
        // icone: 'between-vertical-end',
        icone: 'lucideAlignVerticalJustifyStart',
        rota: '/filas',
        titulo: 'Filas',
      },
      {
        id: generateId('item-navegacao'),
        icone: 'lucideAirplay',
        rota: '/guiches',
        titulo: 'Guichês',
      },
      {
        id: generateId('item-navegacao'),
        icone: 'lucideIdCardLanyard',
        rota: '/',
        titulo: 'Atendentes',
      },
      {
        id: generateId('item-navegacao'),
        icone: 'lucideHandPlatter',
        rota: '/',
        titulo: 'Atendimento',
      },
      {
        id: generateId('item-navegacao'),
        icone: 'lucideTvMinimal',
        rota: '/',
        titulo: 'Painel TV',
      },
      {
        id: generateId('item-navegacao'),
        icone: 'lucideBookUser',
        rota: '/',
        titulo: 'Agendamentos',
      },
      {
        id: generateId('item-navegacao'),
        icone: 'lucideChartColumn',
        rota: '/',
        titulo: 'Relatórios',
      },
      {
        id: generateId('item-navegacao'),
        icone: 'lucideUsers',
        rota: '/usuarios-perfis',
        titulo: 'Usuários e Perfis',
      },
      {
        id: generateId('item-navegacao'),
        icone: 'lucideSettings',
        rota: '/configuracoes',
        titulo: 'Configurações',
      },
    ],
  },
];
