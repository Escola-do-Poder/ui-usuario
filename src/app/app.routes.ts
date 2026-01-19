import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./modules/home/home.component').then(c => c.HomeComponent),
  },
  {
    path: '',
    loadComponent: () => import('./core/layout/sidebar-conteudo/sidebar-conteudo.component').then(c => c.SidebarConteudoComponent),
    children: [
      {
        path: 'usuarios',
        loadChildren: () => import('./modules/usuario/usuario.routes').then(r => r.usuarioRoutes),
      },

      { path: '', redirectTo: '', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: '' },
];
