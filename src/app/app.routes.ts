import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./modules/home/home.component').then(c => c.HomeComponent),
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./modules/usuario/usuario.routes').then(r => r.usuarioRoutes),
  },
  { path: '**', redirectTo: '' },
];
