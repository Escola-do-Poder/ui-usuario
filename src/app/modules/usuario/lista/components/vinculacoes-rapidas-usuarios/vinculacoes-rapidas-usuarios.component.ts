import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {ZardCardComponent} from '@zard-ui/components/card';
import {ZardComboboxComponent, ZardComboboxOption} from '@zard-ui/components/combobox';
import {UsuarioService} from '../../../services/usuario.service';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-vinculacoes-rapidas-usuarios',
  imports: [
    ZardCardComponent,
    ZardComboboxComponent,
  ],
  templateUrl: './vinculacoes-rapidas-usuarios.component.html',
  styleUrl: './vinculacoes-rapidas-usuarios.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VinculacoesRapidasUsuariosComponent {
  private _usuariosService = inject(UsuarioService);

  private _usuarios = toSignal(this._usuariosService.listarUsuariosSimplificado(), {initialValue: []});
  public usuariosOptions = computed<ZardComboboxOption[]>(() =>
    this._usuarios().map(usuario => ({
      value: String(usuario.id),
      label: usuario.nome,
    })),
  );
}
