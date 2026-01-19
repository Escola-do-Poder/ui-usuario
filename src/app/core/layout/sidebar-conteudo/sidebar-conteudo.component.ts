import { Component, signal } from '@angular/core';
import { LayoutImports } from '@zard-ui/components/layout/layout.imports';
import { ZardTooltipModule } from '@zard-ui/components/tooltip/tooltip';
import { ZardIconComponent } from '@zard-ui/components/icon/icon.component';
import { ZardButtonComponent } from '@zard-ui/components/button/button.component';
import { ZardMenuImports } from '@zard-ui/components/menu/menu.imports';
import { ZardDividerComponent } from '@zard-ui/components/divider/divider.component';
import { ZardAvatarComponent } from '@zard-ui/components/avatar/avatar.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GrupoNavegacao } from './models/sidebar.interface';
import { Navegacao } from '../navegacao/navegacao';

@Component({
  selector: 'app-sidebar-conteudo',
  imports: [
    LayoutImports,
    ZardButtonComponent,
    ZardMenuImports,
    ZardTooltipModule,
    ZardDividerComponent,
    ZardAvatarComponent,
    ZardIconComponent,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './sidebar-conteudo.component.html',
  styleUrl: './sidebar-conteudo.component.css',
})
export class SidebarConteudoComponent {
  public readonly sidebarCollapsed = signal(false);
  public gruposNavegacao: GrupoNavegacao[] = Navegacao;

  public toggleSidebar() {
    this.sidebarCollapsed.update(collapsed => !collapsed);
  }

  public onCollapsedChange(collapsed: boolean) {
    this.sidebarCollapsed.set(collapsed);
  }
}
