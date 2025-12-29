import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
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
import { UsuarioService } from '../services/usuario.service';
import { HttpErrorResponse } from '@angular/common/http';
import { toast } from 'ngx-sonner';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListaUsuario implements OnInit {
  public usuarios = signal<Usuario[]>([]);

  private _usuarioService = inject(UsuarioService);

  public ngOnInit(): void {
    this._usuarioService.listarUsuarios().subscribe({
      next: (usuarios) => this.usuarios.set(usuarios ?? []),
      error: (err: HttpErrorResponse) => toast.error(
        'Ocorreu um problema!', {
          description: err.error.message,
        }),
    });
  }

  public excluirUsuario(id: number): void {
    this._usuarioService.deletarUsuario(id).subscribe({
      complete: () => {
        toast.success('Usuário deletado com sucesso!');

        this.usuarios.update((usuarios) => usuarios.filter((usuario) => usuario.id !== id));
      },
    });
  }
}
