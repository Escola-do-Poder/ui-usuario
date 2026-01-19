import { Routes } from '@angular/router';

export const usuarioRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./lista/lista-usuario.component').then(c => c.ListaUsuario),
  },
  {
    path: 'novo',
    loadComponent: () => import('./cadastrar/cadastrar-usuario.component').then(c => c.CadastrarUsuario),
  },
  {
    path: ':id',
    loadComponent: () => import('./detalhar/detalhar-usuario.component').then(c => c.DetalharUsuario),
  },
  {
    path: ':id/editar',
    loadComponent: () => import('./editar/editar-usuario.component').then(c => c.EditarUsuario),
  },
];
