import { Routes } from '@angular/router';
import { ListaUsuario } from './modules/usuario/lista/lista-usuario.component';
import { FormularioUsuario } from './modules/usuario/formulario/formulario-usuario.component';

export const routes: Routes = [
  { path: '', component: ListaUsuario },
  { path: 'usuario/novo', component: FormularioUsuario },
  { path: '**', redirectTo: '' },
];
