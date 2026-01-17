import { ZardContextMenuDirective } from '@zard-ui/components/menu/context-menu.directive';
import { ZardMenuContentDirective } from '@zard-ui/components/menu/menu-content.directive';
import { ZardMenuItemDirective } from '@zard-ui/components/menu/menu-item.directive';
import { ZardMenuLabelComponent } from '@zard-ui/components/menu/menu-label.component';
import { ZardMenuShortcutComponent } from '@zard-ui/components/menu/menu-shortcut.component';
import { ZardMenuDirective } from '@zard-ui/components/menu/menu.directive';

export const ZardMenuImports = [
  ZardContextMenuDirective,
  ZardMenuContentDirective,
  ZardMenuItemDirective,
  ZardMenuDirective,
  ZardMenuLabelComponent,
  ZardMenuShortcutComponent,
] as const;
