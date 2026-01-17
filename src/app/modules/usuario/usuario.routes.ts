import { Routes } from '@angular/router';

export const usuarioRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./lista/lista-usuario.component').then(m => m.ListaUsuario),
  },
  {
    path: 'novo',
    loadComponent: () => import('./cadastrar/cadastrar-usuario.component').then(m => m.CadastrarUsuario),
  },
  {
    path: ':id',
    loadComponent: () => import('./detalhar/detalhar-usuario.component').then(m => m.DetalharUsuario),
  },
  {
    path: ':id/editar',
    loadComponent: () => import('./editar/editar-usuario.component').then(m => m.EditarUsuario),
  },
];
