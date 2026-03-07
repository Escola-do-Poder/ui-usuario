import { Component, inject, OnInit, signal } from '@angular/core';
import { ZardCardComponent } from '@zard-ui/components/card/card.component';
import { ZardButtonComponent } from '@zard-ui/components/button/button.component';
import { ZardPaginationComponent } from '@zard-ui/components/pagination';
import { CpfPipe } from '@shared/pipes/cpf.pipe';
import { ZardIconComponent } from '@zard-ui/components/icon';
import { ZardSkeletonComponent } from '@zard-ui/components/skeleton/skeleton.component';
import { ZardTooltipDirective } from '@zard-ui/components/tooltip/tooltip';
import { Usuario } from '../../../models/usuario';
import { HttpLoadingService } from '../../../../../core/http/http-loading.service';
import { UsuarioService } from '../../../services/usuario.service';
import { toast } from 'ngx-sonner';
import { RouterLink } from '@angular/router';
import { ZardTableImports } from '@zard-ui/components/table';

@Component({
  selector: 'app-tabela-usuarios',
  imports: [
    ZardCardComponent,
    ZardButtonComponent,
    ZardPaginationComponent,
    CpfPipe,
    ZardIconComponent,
    ZardSkeletonComponent,
    ZardTableImports,
    ZardTooltipDirective,
    RouterLink,
  ],
  templateUrl: './tabela-usuarios.component.html',
  styleUrl: './tabela-usuarios.component.css',
})
export class TabelaUsuariosComponent implements OnInit {
  public usuarios = signal<Usuario[]>([]);
  public quantidadeSkeletons: number[] = Array.from({ length: 4 });

  protected httpLoadingService = inject(HttpLoadingService);

  private _usuarioService = inject(UsuarioService);

  public ngOnInit(): void {
    this._usuarioService.listarUsuarios().subscribe({
      next: (usuarios) => this.usuarios.set(usuarios ?? []),
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
