import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideTrash2, lucideUserPen, lucideUserSearch } from '@ng-icons/lucide';
import { ZardCardComponent } from '@zard-ui/components/card/card.component';
import { ZardButtonComponent } from '@zard-ui/components/button/button.component';
import { ZardPaginationComponent } from '@zard-ui/components/pagination';
import { CpfPipe } from '@shared/pipes/cpf.pipe';
import { ZardSkeletonComponent } from '@zard-ui/components/skeleton/skeleton.component';
import { ZardTooltipImports } from '@zard-ui/components/tooltip';
import { Usuario } from '../../../models/usuario';
import { UsuarioService } from '../../../services/usuario.service';
import { toast } from 'ngx-sonner';
import { RouterLink } from '@angular/router';
import { ZardTableImports } from '@zard-ui/components/table';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-tabela-usuarios',
  imports: [
    ZardCardComponent,
    ZardButtonComponent,
    ZardPaginationComponent,
    CpfPipe,
    NgIcon,
    ZardSkeletonComponent,
    ZardTableImports,
    ZardTooltipImports,
    RouterLink,
  ],
  templateUrl: './tabela-usuarios.component.html',
  styleUrl: './tabela-usuarios.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [provideIcons({ lucideTrash2, lucideUserPen, lucideUserSearch })],
})
export class TabelaUsuariosComponent {
  public quantidadeSkeletons: number[] = Array.from({ length: 4 });
  public usuarios = computed(() => this._usuariosResource.hasValue() ? this._usuariosResource.value() : []);

  private _recarregarResource = signal(0);
  private _usuariosResource = rxResource({
    params: () => ({
      reloadVersion: this._recarregarResource(),
    }),
    stream: () => this._usuarioService.listarUsuarios(),
    defaultValue: [] as Usuario[],
  });

  private _usuarioService = inject(UsuarioService);

  public carregamentoInicial = computed(
    () => this._usuariosResource.status() === 'loading',
  );

  public excluirUsuario(id: number): void {
    this._usuarioService.deletarUsuario(id).subscribe({
      next: () => {
        toast.success('Usuário deletado com sucesso!');
        this._recarregarResource.update((vezesRecarregado) => vezesRecarregado + 1);
      },
    });
  }

  public recarregarUsuarios(): void {
    this._recarregarResource.update((vezesRecarregado) => vezesRecarregado + 1);
  }
}
