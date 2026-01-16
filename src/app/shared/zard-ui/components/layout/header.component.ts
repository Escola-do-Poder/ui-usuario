import { ChangeDetectionStrategy, Component, computed, input, ViewEncapsulation } from '@angular/core';

import type { ClassValue } from 'clsx';

import { headerVariants } from '@zard-ui/components/layout/layout.variants';
import { mergeClasses } from '@zard-ui/utils/merge-classes';

@Component({
  selector: 'z-header',
  template: `
    <header [class]="classes()" [style.height.px]="zHeight()">
      <ng-content />
    </header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'zHeader',
})
export class HeaderComponent {
  readonly class = input<ClassValue>('');
  readonly zHeight = input<number>(64);

  protected readonly classes = computed(() => mergeClasses(headerVariants(), this.class()));
}
