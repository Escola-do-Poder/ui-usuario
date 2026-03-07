import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ZardButtonComponent } from '@zard-ui/components/button/button.component';
import { ZardIconComponent } from '@zard-ui/components/icon/icon.component';
import { ZardTooltipModule } from '@zard-ui/components/tooltip/tooltip';
import { RouterLink } from '@angular/router';
import { SegmentedOption, ZardSegmentedComponent } from '@zard-ui/components/segmented';
import { TabelaUsuariosComponent } from './components/tabela-usuarios/tabela-usuarios.component';
import {
  VinculacoesRapidasUsuariosComponent,
} from './components/vinculacoes-rapidas-usuarios/vinculacoes-rapidas-usuarios.component';

@Component({
  selector: 'app-lista-usuario',
  imports: [
    ZardButtonComponent,
    ZardIconComponent,
    ZardTooltipModule,
    RouterLink,
    ZardSegmentedComponent,
    TabelaUsuariosComponent,
    VinculacoesRapidasUsuariosComponent,
  ],
  templateUrl: './lista-usuario.component.html',
  styleUrl: './lista-usuario.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListaUsuario {
  public opcoes: SegmentedOption[] = [
    { label: 'Usuários', value: 'usuarios', disabled: false },
    { label: 'Perfis', value: 'perfis', disabled: false },
  ];

  public opcaoSelecionada = signal<SegmentedOption['value']>(this.opcoes[0].value);

  public aoMudarOpcaoSelecionada(opcaoSelecionada: SegmentedOption['value']): void {
    this.opcaoSelecionada.set(opcaoSelecionada);
  };


}
