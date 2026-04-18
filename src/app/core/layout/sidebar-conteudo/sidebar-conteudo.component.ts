import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideAirplay,
  lucideAlignVerticalJustifyStart,
  lucideBookUser,
  lucideChartColumn,
  lucideChevronRight,
  lucideChevronsUpDown,
  lucideHandPlatter,
  lucideHouse,
  lucideIdCardLanyard,
  lucideLayoutDashboard,
  lucideLogOut,
  lucidePanelLeft,
  lucideSettings,
  lucideTvMinimal,
  lucideUser,
  lucideUsers,
} from '@ng-icons/lucide';
import { LayoutImports } from '@zard-ui/components/layout/layout.imports';
import { ZardButtonComponent } from '@zard-ui/components/button/button.component';
import { ZardMenuImports } from '@zard-ui/components/menu/menu.imports';
import { ZardDividerComponent } from '@zard-ui/components/divider/divider.component';
import { ZardAvatarComponent } from '@zard-ui/components/avatar/avatar.component';
import { ZardTooltipImports } from '@zard-ui/components/tooltip';
import { IsActiveMatchOptions, NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { GrupoNavegacao, ItemNavegacao } from './models/sidebar.interface';
import { Navegacao } from '../navegacao/navegacao';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map, startWith } from 'rxjs';

@Component({
  selector: 'app-sidebar-conteudo',
  imports: [
    LayoutImports,
    ZardButtonComponent,
    ZardMenuImports,
    ZardTooltipImports,
    ZardDividerComponent,
    ZardAvatarComponent,
    NgIcon,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './sidebar-conteudo.component.html',
  styleUrl: './sidebar-conteudo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    provideIcons({
      lucideAirplay,
      lucideAlignVerticalJustifyStart,
      lucideBookUser,
      lucideChartColumn,
      lucideChevronRight,
      lucideChevronsUpDown,
      lucideHandPlatter,
      lucideHouse,
      lucideIdCardLanyard,
      lucideLayoutDashboard,
      lucideLogOut,
      lucidePanelLeft,
      lucideSettings,
      lucideTvMinimal,
      lucideUser,
      lucideUsers,
    }),
  ],
})
export class SidebarConteudoComponent {
  public readonly sidebarCollapsed = signal(false);
  public gruposNavegacao: GrupoNavegacao[] = Navegacao;

  private readonly router = inject(Router);

  private readonly currentUrl = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(() => this.router.url),
      startWith(this.router.url),
    ),
    { initialValue: this.router.url },
  );

  public toggleSidebar() {
    this.sidebarCollapsed.update(collapsed => !collapsed);
  }

  public onCollapsedChange(collapsed: boolean) {
    this.sidebarCollapsed.set(collapsed);
  }

  public isRotaAtiva(rota?: string): boolean {
    this.currentUrl();
    if (!rota) return false;
    const urlTree = this.router.createUrlTree([rota]);
    const matchOptions: IsActiveMatchOptions =
      rota === '/'
        ? {
          paths: 'exact',
          queryParams: 'ignored',
          fragment: 'ignored',
          matrixParams: 'ignored',
        }
        : {
          paths: 'subset',
          queryParams: 'ignored',
          fragment: 'ignored',
          matrixParams: 'ignored',
        };
    return this.router.isActive(urlTree, matchOptions);
  }

  public isItemAtivo(item: ItemNavegacao): boolean {
    if (this.isRotaAtiva(item.rota)) return true;
    return item.submenus?.some(submenu => this.isRotaAtiva(submenu.rota)) ?? false;
  }

  public obterClasseItemBotao(item: ItemNavegacao): string {
    const baseClass = this.sidebarCollapsed() ? 'justify-center' : 'justify-start';
    const activeClass = this.isItemAtivo(item) ? ' bg-accent text-accent-foreground' : '';
    return baseClass + activeClass;
  }

  public obterClasseLinkBotao(rota?: string): string {
    const baseClass = this.sidebarCollapsed() ? 'justify-center' : 'justify-start';
    const activeClass = this.isRotaAtiva(rota) ? ' bg-accent text-accent-foreground' : '';
    return baseClass + activeClass;
  }

  public obterClasseSubmenuItem(rota?: string): string {
    return this.isRotaAtiva(rota) ? 'bg-accent text-accent-foreground' : '';
  }
}
