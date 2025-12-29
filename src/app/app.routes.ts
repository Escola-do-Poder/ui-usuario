import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./modules/usuario/lista/lista-usuario.component').then(c => c.ListaUsuario),
  },
  {
    path: 'usuario/novo',
    loadComponent: () => import('./modules/usuario/cadastrar/cadastrar-usuario.component').then(c => c.CadastrarUsuario),
  },
  {
    path: 'usuario/:id',
    loadComponent: () => import('./modules/usuario/detalhar/detalhar-usuario.component').then(c => c.DetalharUsuario),
  },
  {
    path: 'usuario/:id/editar',
    loadComponent: () => import('./modules/usuario/editar/editar-usuario.component').then(c => c.EditarUsuario),
  },
  { path: '**', redirectTo: '' },
];
