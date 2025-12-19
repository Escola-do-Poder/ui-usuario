import { Component } from '@angular/core';
import {
  ZardTableBodyComponent,
  ZardTableCellComponent,
  ZardTableComponent,
  ZardTableHeadComponent,
  ZardTableHeaderComponent,
  ZardTableRowComponent,
} from '@zard-ui/components/table/table.component';
import { ZardButtonComponent } from '@zard-ui/components/button/button.component';
import { ZardIconComponent } from '@zard-ui/components/icon/icon.component';
import { ZardTooltipModule } from '@zard-ui/components/tooltip/tooltip';
import { CpfPipe } from '@shared/pipes/cpf.pipe';
import { Usuario } from '../models/usuario';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-usuario',
  imports: [
    ZardTableComponent,
    ZardTableHeaderComponent,
    ZardTableBodyComponent,
    ZardTableRowComponent,
    ZardTableHeadComponent,
    ZardTableCellComponent,
    ZardButtonComponent,
    ZardIconComponent,
    ZardTooltipModule,
    CpfPipe,
    RouterLink,
  ],
  templateUrl: './lista-usuario.component.html',
  styleUrl: './lista-usuario.component.css',
})
export class ListaUsuario {
  public usuarios: Usuario[] = [
    { id: '1', nome: 'Ana Paula Souza', cpf: '12345678900', rg: 12345678 },
    { id: '2', nome: 'Bruno Henrique Lima', cpf: '98765432100', rg: 87654321 },
    { id: '3', nome: 'Carla Mendes Oliveira', cpf: '11122233344', rg: 11223344 },
    { id: '4', nome: 'Diego Santos Ferreira', cpf: '55566677788', rg: 55667788 },
  ];
}
