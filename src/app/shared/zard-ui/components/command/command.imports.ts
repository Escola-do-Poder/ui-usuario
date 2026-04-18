import { ZardCommandDividerComponent } from '@zard-ui/components/command/command-divider.component';
import { ZardCommandEmptyComponent } from '@zard-ui/components/command/command-empty.component';
import { ZardCommandInputComponent } from '@zard-ui/components/command/command-input.component';
import { ZardCommandListComponent } from '@zard-ui/components/command/command-list.component';
import { ZardCommandOptionGroupComponent } from '@zard-ui/components/command/command-option-group.component';
import { ZardCommandOptionComponent } from '@zard-ui/components/command/command-option.component';
import { ZardCommandComponent } from '@zard-ui/components/command/command.component';

export const ZardCommandImports = [
  ZardCommandComponent,
  ZardCommandInputComponent,
  ZardCommandListComponent,
  ZardCommandEmptyComponent,
  ZardCommandOptionComponent,
  ZardCommandOptionGroupComponent,
  ZardCommandDividerComponent,
] as const;
